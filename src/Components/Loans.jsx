import React, { useState } from "react";
import LoanDetails from "./LoanDetails";

const Loans = () => {
  const [loans, setLoans] = useState([
    {
      id: 1,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 2,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 3,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 5,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 25,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 55,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
    {
      id: 57,
      name: "nicole",
      loanType: "Mortage",
      amount: 2000,
      loanTerm: "10 Months",
      monthlyPay: "150",
      totalDue: "2150",
      monthlyEarnings: "500",
      paymentMethod: "Direct Deposit",
      paymentDetails: "0129332293",
      isApproved: false,
    },
  ]);
  const handleApprove = (id) => {
    setLoans(
      loans.map((loan) =>
        loan.id == id
          ? {
              ...loan,
              isApproved: true,
            }
          : loan
      )
    );
  };
  const handleReject = (id) => {
    setLoans(
      loans.map((loan) =>
        loan.id == id
          ? {
              ...loan,
              isApproved: false,
            }
          : loan
      )
    );
  };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1 overflow-x-auto  py-2 px-2 bg-gray-50 h-auto">
          {loans.map((loan) => (
            <div className="relative" key={loan.id}>
              <LoanDetails
                userName={loan.name}
                loanType={loan.loanType}
                term={loan.loanTerm}
                amount={loan.amount}
                totalDue={loan.totalDue}
                MonthlyEarnings={loan.monthlyEarnings}
                monthlyPay={loan.monthlyPay}
                paymentMethod={loan.paymentMethod}
                paymentDetails={loan.paymentDetails}
                approve={handleApprove}
                reject={handleReject}
                status={loan.isApproved}
                id={loan.id}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Loans;
