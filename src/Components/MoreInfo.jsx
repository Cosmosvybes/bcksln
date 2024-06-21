import React, { useLayoutEffect, useState } from "react";
import { CheckCircle, RemoveCircle } from "react-huge-icons/outline";

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
          <h1 className="text-2xl text-gray-400">Loan Details</h1>
          <div className="relative block">
            <p className="text-amber-500">Loan Type</p>
            <p className="text-xs text-gray-400">{loanDetails?.loantype}</p>
          </div>
          <div className="relative block">
            <p className="text-amber-500">Amount</p>
            <p className="text-xs text-gray-400 ">${loanDetails?.amount}</p>
          </div>
          <div className="relative flex justify-start gap-1 items-center">
            <p className="text-amber-500"> Status</p>

            <div className="flex flex-col gap-1">
              {data.isApproved ? (
                <p className="text-xs flex items-center justify-center text-green-500">
                  approved{" "}
                  <CheckCircle className="text-green-500 text-xs inline" />
                </p>
              ) : (
                <p
                  className={`text-xs px-1 py-1 rounded-md font-thin ${
                    !data.isApproved && "text-amber-600"
                  } ${!data.isApproved && "bg-amber-200"}`}
                >
                  Processing
                </p>
              )}
            </div>
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
