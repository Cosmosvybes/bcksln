import React, { useState } from "react";
import PaymentReceipt from "./PaymentReceipt";
import image1 from "../assets/activate.png";
import image2 from "../assets/Pia_486x440px_Auto Loan_keys.png";
const Receipt = () => {
  const [receipts, setReceipts] = useState([
    {
      id: 1,
      firstname: "Nicole",
      amount: 500,
      email: "nicole-netreon@nicole.com",
      image1: image1,
      image2: image2,
      isVerified: false,
    },
    {
      id: 14,
      firstname: "Nicoleuse",
      amount: 500,
      email: "nicole-netreon@nicole.com",
      image1: image1,
      image2: image2,
      isVerified: false,
    },
    {
      id: 13,
      firstname: "Rolland",
      amount: 500,
      email: "nicole-netreon@nicole.com",
      image1: image1,
      image2: image2,
      isVerified: false,
    },
   
  ]);
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
  };
  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2  ">
        <div className="grid grid-cols-2 gap-3  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
          {receipts.map((receipt) => (
            <div className="relative" key={receipt.id}>
              <PaymentReceipt
                id={receipt.id}
                imageOne={receipt.image1}
                imageTwo={receipt.image2}
                firstname={receipt.firstname}
                isVerified={receipt.isVerified}
                email={receipt.email}
                reject={handleReject}
                approve={handleApprov}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Receipt;
