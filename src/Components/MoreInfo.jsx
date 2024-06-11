import React, { useLayoutEffect, useState } from "react";
import { RemoveCircle } from "react-huge-icons/outline";

const MoreInfo = ({ showMore, callback, data }) => {
  const [loanDetails, setDetails] = useState({});
  useLayoutEffect(() => {
    setDetails(data.loanData);
  }, [data]);

  return (
    <>
      {showMore && (
        <div className="h-auto right-2  top-3 max-sm:w-72 flex flex-col justify-start  w-96  border bg-gray-100 absolute rounded-md z-20 px-2">
          <RemoveCircle
            className="absolute right-0 text-2xl text-gray-400"
            onClick={callback}
          />
          <h1 className="text-2xl">Loan Details</h1>
          <div className="relative block">
            <p className="text-amber-500">Loan Type</p>
            <p className="text-xs text-gray-400">{loanDetails?.loantype}</p>
          </div>
          <div className="relative block">
            <p className="text-amber-500">Amount</p>
            <p className="text-xs text-gray-400 ">${loanDetails?.amount}</p>
          </div>
          <div className="relative block">
            <p className="text-amber-500">Approval Status</p>
            <p className={`${
             data.isApproved ? "bg-green-200" : "bg-red-200"
            } rounded-md w-28 px-2 py-0.5 ${
              data.isApproved ? "text-green-500" : "text-red-500"
            }`}>
              {data.isApproved ? "Approved" : "Pending"}
            </p>
          </div>
          <div className="relative block">
            <p className="text-amber-500">Payment Method</p>
            <p className="text-xs text-gray-400">
              {loanDetails?.paymentMethod}
            </p>
          </div>
          <div className="relative block">
            <p className="text-amber-500">Loan Term</p>
            <p className="text-xs text-gray-400">
              {loanDetails?.loanTerm} Months
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfo;
