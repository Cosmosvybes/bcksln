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
      <div className="flex max-sm:w-auto justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-0">
      <p className="  rounded-md  py-1 text-green-700 "> Loan Details</p>
        <div className="relative ml-0 py-0.5 w-10 bg-green-700 -mt-1"></div>
        <div className="flex justify-start items-center gap-2">
          <p>
            {" "}
            Status <ArrowRight className="inline text-gray-400 text-2xl" />{" "}
            <p className="inline text-gray-400" style={{ color: status ? "green" : "brown" }}>
              {" "}
              {status ? "Approved" : "Rejected"}
            </p>
          </p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1 className=" text-center text-gray-400 ">Username  {userName}</h1>
          {/* <h1> {lastname}</h1> */}
        </div>
        <div className="flex items-center justify-start gap-2">
          <BookOpenInfo className="inline text-amber-500 text-2xl " />
          <h3 className=" text-center text-gray-400 ">Loan Type: {loanType}</h3>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Dollar className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Amount : {amount}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <DocumentText className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Loan term : {term}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Dollar className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Monthly Payment: {monthlyPay}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalculatorModernWritten className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Total Due: {totalDue}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Earnings className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Customer Earnings: {MonthlyEarnings}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Atm className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Payment method: {paymentMethod}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <InformationCircle className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Payment Details: {paymentDetails}</p>
        </div>

        <div className="flex justify-start max-sm:w-auto mt-2 items-center gap-3">
          <button
            onClick={() => reject(id)}
            className="bg-red-500 px-3 py-2 rounded-md text-white"
          >
            Reject
          </button>{" "}
          <button
            onClick={() => approve(id)}
            className="text-green-600 bg-green-300 rounded-md px-3 py-2"
          >
            Approve
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
