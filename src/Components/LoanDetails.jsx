// import { BookOpenInfo } from "react-huge-icons/outline";
import {
  ArrowRight,
  Atm,
  DocumentText,
  MoneyDollar,
  Mail,
  InformationPolygon,
  CheckCircle,
} from "react-huge-icons/solid";

const LoanDetails = ({
  id,
  loanType,
  email,
  amount,
  term,
  monthlyPay,
  paymentMethod,
  approve,
  reject,
  status,
  user,
}) => {
  return (
    <>
      <div className="flex max-sm:w-auto justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-0">
        <p className="  rounded-md  py-1 text-green-700 "> Loan Details</p>
        <div className="relative ml-0 py-0.5 w-10 bg-green-700 -mt-1"></div>
        <div className="flex justify-start items-center gap-2">
          {" "}
          Status <ArrowRight className="inline text-gray-400 text-2xl" />{" "}
          <p
            className={`text-xs px-1 py-1 w-28 rounded-md font-thin ${
              status ? "text-green-500" : "text-amber-600"
            } ${status ? "bg-green-200" : "bg-amber-200"}`}
          >
            {status ? "Approved" : "Pending"}
          </p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Mail className="inline text-amber-500 text-2xl " />
          <h1 className=" text-center text-gray-400 ">Email {email}</h1>
          {/* <h1> {lastname}</h1> */}
        </div>
        <div className="flex justify-start items-center gap-2">
          <Mail className="inline text-amber-500 text-2xl " />
          <h1 className=" text-center text-gray-400 ">
            Name {user.firstname} {user.lastname}
          </h1>
          {/* <h1> {lastname}</h1> */}
        </div>
        <div className="flex items-center justify-start gap-2">
          <InformationPolygon className="inline text-amber-500 text-2xl " />
          <h3 className=" text-center text-gray-400 ">Loan Type: {loanType}</h3>
        </div>
        <div className="flex items-center justify-start gap-2">
          <MoneyDollar className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Amount :${amount}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <DocumentText className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">Loan term : {term}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <MoneyDollar className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  ">
            Monthly Payment:${monthlyPay}
          </p>
        </div>

        <div className="flex  justify-start gap-2">
          <Atm className="inline text-amber-500 text-2xl " />
          <p className="text-center text-gray-400  text-xs ">
            Pay Method: {paymentMethod}
          </p>
        </div>

        <div className="flex justify-start max-sm:w-auto mt-2 items-center gap-3">
          {!status ? (
            <button
              onClick={() => approve(id, email)}
              className="text-green-600 bg-green-300 rounded-md px-3 py-2"
            >
              Approve
            </button>
          ) : (
            <CheckCircle className="text-3xl text-green-500" />
          )}
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
