import React, { useState } from "react";
import PaymentReceipt from "./PaymentReceipt";
import { Spinner } from "reactstrap";
import { useSelector } from "react-redux";

const Receipt = () => {
  const { data, isLoading } = useSelector((state) => state.receiptSlice);
  console.log(data);
  // console.log(payments);
  // let [receipts, setReceipts] = useState(payments);
  // const handleApprov = (id) => {
  //   setReceipts(
  //     receipts.map((receipt) =>
  //       receipt.id == id
  //         ? {
  //             ...receipt,
  //             isVerified: true,
  //           }
  //         : receipt
  //     )
  //   );
  //   console.log(receipts);
  // };
  // const handleReject = (id) => {
  //   setReceipts(
  //     receipts.map((receipt) =>
  //       receipt.id == id
  //         ? {
  //             ...receipt,
  //             isVerified: false,
  //           }
  //         : receipt
  //     )
  //   );

  // };
  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {isLoading ? (
          <div className="relative h-screen flex justify-center items-center">
            <Spinner type="border" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
            {/* {data.map((receipt, i) => (
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
            ))} */}
          </div>
        )}
      </section>
    </>
  );
};

export default Receipt;
