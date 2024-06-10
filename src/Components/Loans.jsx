import React, { useLayoutEffect } from "react";
import LoanDetails from "./LoanDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoansApplication,
  rejectStatus,
  updateStatus,
} from "../brain/Loans";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

const Loans = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.loansSlice);

  useLayoutEffect(() => {
    dispatch(getLoansApplication());
  }, []);

  const handleApprove = async (id, email) => {
    dispatch(updateStatus({ id: id }));
    fetch(
      `https://bck-server.onrender.com/api/approve/loan/${id}?email=${email}`,
      {
        method: "POST",
        credentials: "include",
      }
    )
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
  };

  // const handleReject = async (id) => {
  //   dispatch(rejectStatus({ id: id }));
  //   let response = await fetch(`http://localhost:8080/api/approve/loan/${id}`, {
  //     method: "PATCH",
  //     credentials: "include",
  //   });
  //   if (!response.ok) {
  //     console.log(response.response);
  //     return;
  //   }
  //   toast.success(response.response);
  // };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {isLoading ? (
          <div className="relative h-screen flex justify-center items-center">
            <Spinner type="border" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1   py-2 px-2 bg-gray-50 h-auto">
            {data.map(({ status, loanData, email, id }) => (
              <div className="relative" key={id}>
                <LoanDetails
                  email={email}
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
