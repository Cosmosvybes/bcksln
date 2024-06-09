import React, { useState } from "react";
import PaymentReceipt from "./PaymentReceipt";
import { Spinner } from "reactstrap";

const Receipt = ({ payments, loading }) => {
  // console.log(payments);
  let [receipts, setReceipts] = useState(payments);
  const handleApprov = (id) => {
    setReceipts(
      receipts.map((receipt) =>
        receipt.id == id
          ? {
              ...receipt,
              isVerified: true,
            }
          : receipt
      )
    );
    console.log(receipts);
  };
  const handleReject = (id) => {
    setReceipts(
      receipts.map((receipt) =>
        receipt.id == id
          ? {
              ...receipt,
              isVerified: false,
            }
          : receipt
      )
    );
    console.log(receipts);
  };
  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2  ">
        {loading ? (
          <Spinner type="border" />
        ) : (
          <div className="grid grid-cols-2 gap-3  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
            {receipts.map((receipt, i) => (
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
                  // isVerified={receipt.isVerified}
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
