import React, { useLayoutEffect, useState } from "react";
import PaymentReceipt from "./PaymentReceipt";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { approveHandler, getReceipts } from "../brain/Receipt";
import { toast } from "react-toastify";

const Receipt = () => {
  const { data, isLoading } = useSelector((state) => state.receiptSlice);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getReceipts());
  }, []);

  const handleApprov = async (id) => {
    dispatch(approveHandler({ id: id }));
    let response = await fetch(
      `https://bck-server.onrender.com/api/verify-downpayment/${id}`,
      { method: "PATCH", credentials: "include" }
    );
    if (!response.ok) {
      toast.warning(response.response);
      return;
    }
    let okayResponse = await response.json();
    toast.success(okayResponse.response);
  };

  const handleReject = async (id) => {
    dispatch(approveHandler({ id: id }));
    let response = await fetch(
      `https://bck-server.onrender.com/reject-downpayment/${id}`,
      { method: "PATCH", credentials: "include" }
    );
    if (!response.ok) {
      toast.warning(response.response);
      return;
    }
    let okayResponse = await response.json();
    toast.success(okayResponse.response);
  };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {isLoading ? (
          <div className="relative h-screen flex justify-center items-center">
            <Spinner type="border" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
            {data.map((receipt, i) => (
              <div className="relative" key={i}>
                <PaymentReceipt
                  id={receipt.id}
                  amount={
                    receipt.paymentDetails.amount
                      ? receipt.paymentDetails.amount
                      : receipt.paymentDetails.balance
                  }
                  photo={
                    receipt.paymentDetails.photos
                      ? receipt.paymentDetails.photos
                      : receipt.paymentDetails.photo
                  }
                  // imageTwo={receipt.image2}
                  firstname={receipt.firstname}
                  isVerified={receipt.isApproved}
                  email={receipt.email}
                  reject={handleReject}
                  approve={handleApprov}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Receipt;
