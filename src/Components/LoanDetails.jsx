import { BookOpenInfo } from "react-huge-icons/outline";
import {
  ArrowRight,
  Atm,
  CalculatorModernWritten,
  DocumentText,
  Dollar,
  Earnings,
  InformationCircle,
} from "react-huge-icons/solid";

const LoanDetails = ({
  id,
  loanType,
  userName,
  amount,
  term,
  monthlyPay,
  totalDue,
  MonthlyEarnings,
  paymentMethod,
  paymentDetails,
  approve,
  reject,
  status,
}) => {
  return (
    <>
      <div className="flex justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
        <p className=" text-green-500 rounded-md px-1 py-1 bg-gray-50 ">
          {" "}
          Loan Information
        </p>
        <div className="flex justify-start items-center gap-2">
          <strong>
            {" "}
            Status <ArrowRight className="inline text-2xl" />{" "}
            <p className="inline" style={{ color: status ? "green" : "brown" }}>
              {" "}
              {status ? "Approved" : "Rejected"}
            </p>
          </strong>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1>User : {userName}</h1>
          {/* <h1> {lastname}</h1> */}
        </div>
        <div className="flex items-center justify-start gap-2">
          <BookOpenInfo className="inline " />
          <h3 className=" text-center">Loan Type: {loanType}</h3>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Dollar className="inline " />
          <p className="text-center ">Amount : {amount}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <DocumentText className="inline " />
          <p className="text-center ">Loan term : {term}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Dollar className="inline " />
          <p className="text-center ">Monthly Payment: {monthlyPay}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalculatorModernWritten className="inline " />
          <p className="text-center ">Total Due: {totalDue}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Earnings className="inline " />
          <p className="text-center ">Customer Earnings: {MonthlyEarnings}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Atm className="inline " />
          <p className="text-center ">Payment method: {paymentMethod}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <InformationCircle className="inline " />
          <p className="text-center ">Payment Details: {paymentDetails}</p>
        </div>

        <div className="flex justify-start max-sm:w-auto items-center gap-3">
          <button
            onClick={() => reject(id)}
            className="bg-red-500 px-2 py-1 rounded-md text-white"
          >
            Reject
          </button>{" "}
          <button
            onClick={() => approve(id)}
            className="text-green-600 bg-green-300 rounded-md px-2 py-1"
          >
            Approve
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
