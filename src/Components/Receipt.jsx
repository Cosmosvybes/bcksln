import React, { useLayoutEffect, useState } from "react";
import PaymentReceipt from "./PaymentReceipt";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { approveHandler, getReceipts } from "../brain/Receipt";

const Receipt = () => {
  const { data, isLoading } = useSelector((state) => state.receiptSlice);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getReceipts());
  }, []);


  const handleApprov = (id) => {
    dispatch(approveHandler({ id: id }));
  };

  const handleReject = (id) => {
    dispatch(approveHandler({ id: id }));
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
                  id={receipt._id}
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
