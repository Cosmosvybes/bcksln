import {
  ArrowDown,
  ArrowRight,
  BoxArrowDown,
  Deposit,
  Dollar,
  LoadingDashed,
  OpenBoxArrowDown,
} from "react-huge-icons/outline";
import review from "../assets/review.png";
import picture from "../assets/profilepic.png";
import img from "../assets/support.webp";
import { Link } from "react-router-dom";
import Loan from "./Loan";
import { useState } from "react";
import Activity from "./Activity";
import { Security } from "react-huge-icons/solid";
const Dashboard = () => {
  const [loans] = useState([
    { id: 1, name: "Mortage", interest: 0.03, amount: "20,000" },
    { id: 2, name: "Student loan", interest: 0.02, amount: "17,000 " },
    { id: 3, name: "Auto loans", interest: 0.05, amount: "10,000" },
    { id: 4, name: "Business loans ", interest: 0.02, amount: "200,000" },
    { id: 5, name: "Salary advance ", interest: 0.02, amount: "7,000" },
    { id: 45, name: "Pool loans ", interest: 0.04, amount: "25,000" },
  ]);
  const [history, setHistory] = useState([
    {
      id: 1,
      loanName: "Personal loans",
      amount: "5,000",
      status: "Pending",
      date: new Date().toUTCString(),
    },
    {
      id: 2,
      loanName: "Mortage loans",
      amount: "3,000",
      status: "Approved",
      date: new Date().toUTCString(),
    },
    {
      id: 3,
      loanName: "Auto loans",
      amount: "8,500",
      status: "Approved",
      date: new Date().toUTCString(),
    },
    {
      id: 32,
      loanName: "Auto loans",
      amount: "8,500",
      status: "Approved",
      date: new Date().toUTCString(),
    },
    {
      id: 34,
      loanName: "Auto loans",
      amount: "8,500",
      status: "Declined",
      date: new Date().toUTCString(),
    },
  ]);
  const [displayActivities, setActivities] = useState(2);
  const handleShowAll = () => {
    if (history.length != displayActivities) {
      const allPost = history.length;
      setActivities(allPost);
    } else {
      setActivities(2);
    }
  };

  return (
    <>
      {!true ? (
        <section className="h-auto bg-gray-100 relative py-4 max-sm:px-3 px-10">
          <h1 className="text-8xl font-extrabold  max-sm:text-4xl mb-2 ml-2">
            Dashboard
          </h1>
          <div className="flex px-5  max-sm:px-1 justify-between items-center bg-gray-50 rounded-lg">
            <h1 className="text-5xl font-bold max-sm:text-2xl  max-sm:font-bold">
              Hello, Chris
              <p className=" text-xs text-gray-400">
                Do more with your finances🎉{" "}
              </p>
            </h1>
            <img
              src={picture}
              alt="profil picture"
              className="w-20 h-20 object-cover rounded-full max-sm:w-16 max-sm:h-16 max-sm:rounded-full"
            />
          </div>
          <div className="flex mt-2 bg-amber-600 h-auto w-full rounded-lg  items-center gap-2 justify-between py-2  px-10 max-sm:px-2">
            <div className="flex justify-start items-start gap-1  flex-col">
              <div className="flex justify-start items-center">
                <p className=" text-white max-sm:text-xs">Loan Account</p>
                <ArrowRight className="text-4xl text-white max-sm:text-2xl" />{" "}
              </div>
              <h1 className="text-2xl max-sm:text-xs max-sm:font-bold text-gray-100 font-extrabold">
                AVAILABLE BALANCE
              </h1>
              <h1 className="text-4xl max-sm:text-2xl text-gray-100 font-extrabold">
                $ 200,000.00
              </h1>
              <Link
                to={"/deposit"}
                className="w-24 bg-black rounded-md px-2 py-1 text-gray-100 mr-0.5"
              >
                Deposit
                <Deposit className="text-white text-xl inline ml-0.5 " />
              </Link>
            </div>
            <div className="flex flex-col gap-5 max-sm:gap-1">
              <img src={img} alt="picture" className="w-30 object-cover h-20" />
              {true ? (
                <Link
                  to={"/application"}
                  className="w-30 bg-black rounded-md px-2 py-1 text-gray-100 mt-5 max-sm:mt-0"
                >
                  Apply now <ArrowRight className="text-white text-xs inline" />
                </Link>
              ) : (
                <Link
                  to={"/application"}
                  className="w-30 bg-black rounded-md px-2 py-1 text-gray-100 mt-5 max-sm:mt-0"
                >
                  Withdraw <ArrowRight className="text-white text-xl inline" />
                </Link>
              )}
            </div>
          </div>
          <div className="relative mt-2 bg-gray-50 h-auto w-full rounded-lg  py-3 px-5  max-sm:px-2">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-extrabold text-black  max-sm:text-xl mb-2 ml-1">
                Activity
              </h1>
              {history.length > 1 && (
                <button
                  onClick={handleShowAll}
                  className="bg-gray-200 rounded-full text-black px-2 text-xs"
                >
                  {displayActivities == 2 ? "See all" : "Fold activity"}
                </button>
              )}
            </div>
            <p className="ml-2 text-xs text-gray-400">Loan history</p>
            {history.length == 0 ? (
              <p className="ml-2 ">No record</p>
            ) : (
              history.length > 2 &&
              history.slice(0, displayActivities).map((history) => (
                <div className="flex  flex-col " key={history.id}>
                  <Activity
                    name={history.loanName}
                    amount={history.amount}
                    date={history.date}
                    status={history.status}
                  />
                </div>
              ))
            )}
          </div>
          <div className="relative mt-2 bg-gray-50 h-auto w-full rounded-lg  py-3 px-5  max-sm:px-2">
            <h1 className="text-4xl font-extrabold text-black  max-sm:text-xl mb-2 ml-1">
              Recommended Loans
            </h1>
            <div className="grid grid-cols-3 gap-1 max-sm:grid-cols-2">
              {loans.map((loan) => (
                <div className="relative" key={loan.id}>
                  <Loan
                    name={loan.name}
                    percentage={loan.interest}
                    amount={loan.amount}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="h-screen flex justify-start items-center flex-col bg-gray-100">
          <Security className="text-5xl text-amber-600 mb-1" />
          <h1 className="text-7xl max-md:text-4xl max-sm:text-2xl font-light">
            Document under review.
          </h1>
          <img src={review} alt="preview" />
          <p className="text-gray-500 max-md:text-2xl font-light text-4xl max-sm:text-xs">
            You will be notified shortly, thank you!
          </p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
