import React, { useState } from "react";
import LoanDetails from "./LoanDetails";
import { useDispatch } from "react-redux";
import { rejectStatus, updateStatus } from "../brain/Loans";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

const Loans = ({ allDataLoans, loading }) => {
  const dispatch = useDispatch();

  const handleApprove = async (id) => {
    dispatch(updateStatus({ id: id }));
    fetch(`http://localhost:8080/api/approve/loan/${id}`, {
      method: "POST",
      credentials: "include",
    })
      .then((result) => {
        if (!result.ok) throw new Error(result.response);
        return result.json();
      })
      .then((response) => {
        toast.success(response.response);
      })
      .catch((err) => {
        toast.success(err.message);
      });
    // console.log(response.response);
    // if (!response.ok) {
    //   // toast.warn(response.response);
    //   console.log(response.response);
    //   return;
    // }
    // toast.success(response.response);
  };

  const handleReject = async (id) => {
    dispatch(rejectStatus({ id: id }));
    let response = await fetch(`http://localhost:8080/api/approve/loan/${id}`, {
      method: "PATCH",
      credentials: "include",
    });
    if (!response.ok) {
      // toast.warn(response.response);
      console.log(response.response);
      return;
    }
    toast.success(response.response);
  };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {loading ? (
          <Spinner type="border" />
        ) : (
          <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1   py-2 px-2 bg-gray-50 h-auto">
            {allDataLoans.map(({ status, loanData, user, id }) => (
              <div className="relative" key={id}>
                <LoanDetails
                  userName={user}
                  loanType={loanData.loantype}
                  term={loanData.loanTerm}
                  amount={loanData.amount}
                  approve={handleApprove}
                  reject={handleReject}
                  status={status}
                  monthlyPay={loanData.monthlyEarningAmount}
                  paymentMethod={loanData.paymentMethod}
                  id={id}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Loans;
