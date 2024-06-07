import { ArrowRight, RemoveCircle } from "react-huge-icons/outline";
import review from "../../assets/review.png";
import picture from "../../assets/profilepic.png";
import img from "../../assets/revolving_deposit.webp";
import { Link } from "react-router-dom";
import Loan from "./Loan";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Activity from "../Activity";
import { Security } from "react-huge-icons/solid";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../brain/user";
import MoreInfo from "../MoreInfo";
const Dashboard = () => {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getUser());
  }, []);

  const [loans] = useState([
    { id: 1, name: "Mortage", interest: 0.05, amount: "20,000" },
    { id: 2, name: "Student loan", interest: 0.02, amount: "17,000 " },
    { id: 3, name: "Auto loans", interest: 0.05, amount: "10,000" },
    { id: 4, name: "Business loans ", interest: 0.1, amount: "200,000" },
    { id: 5, name: "Salary advance ", interest: 0.03, amount: "7,000" },
    { id: 45, name: "Pool loans ", interest: 0.04, amount: "25,000" },
  ]);
  const [history, setHistory] = useState([]);
  const [displayActivities, setActivities] = useState(2);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [loanMoreInfo, setMoreInfo] = useState({});

  const handleShowMore = (id) => {
    setShowMoreDetails(!showMoreDetails);
    let loanInfo = user.transactions.find((loan) => loan.id === id);
    setMoreInfo(loanInfo);
  };

  const handleShowAll = () => {
    if (user.transactions.length != displayActivities) {
      const allPost = user.transactions.length;
      setActivities(allPost);
    } else {
      setActivities(2);
    }
  };
  const handleCloseDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <>
      {/* <Suspense fallback={() => {user.isVerified}}>
        
      </Suspense> */}
      {user?.isVerified ? (
        <section className="h-auto bg-gray-100 relative py-4 max-sm:px-3 px-8">
          <h1 className="text-8xl font-extrabold  max-sm:text-4xl mb-2 ml-2">
            Dashboard
          </h1>
          <div className="flex px-5  max-sm:px-1 justify-between items-center bg-gray-50 rounded-lg">
            <h1 className="text-5xl font-bold max-sm:text-2xl  max-sm:font-bold">
              Hello, {user?.firstname}
              <p className=" text-xs text-gray-400">
                Maximize your financial potential🎉{" "}
              </p>
            </h1>
            <Link to={"/profile"} className="">
              <img
                src={picture}
                alt="profil picture"
                className="w-20 h-20 object-cover rounded-full max-sm:w-16 max-sm:h-16 max-sm:rounded-full"
              />
            </Link>
          </div>
          <div className="flex mt-2 bg-amber-600 h-auto w-full rounded-lg   flex-col gap-2 justify-between py-2  px-10 max-sm:px-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center">
                <p className=" text-white max-sm:text-xs">Loan Account</p>
                <ArrowRight className="text-4xl text-white max-sm:text-2xl" />{" "}
              </div>
              <img src={img} alt="picture" className="w-30 object-cover h-20" />
            </div>
            <hr className=" border-t-1 border-amber-200 w-full " />
            <h1 className="text-2xl text-left max-sm:text-xs max-sm:font-bold text-gray-100 font-extrabold">
              AVAILABLE BALANCE
            </h1>

            <h1 className="text-4xl max-sm:text-xl text-gray-100 font-extrabold">
              $ 200,000.00
            </h1>
            <div className="flex flex-col justify-start">
              <strong className="text-sm font-bold text-gray-50">
                Deposit balance (20% of loan)
              </strong>
              <p className="text-xl max-sm:text-sm text-gray-100 font-thin">
                $ 1000.00
              </p>
            </div>

            <div className="flex w-full justify-start gap-3 max-sm:justify-between items-center">
              <Link
                to={"/deposit"}
                className="w-28 bg-black rounded-md px-0 text-xs py-2  text-center text-gray-100  "
              >
                Deposit
                <ArrowRight className="text-white text-xs inline" />
              </Link>
              {true ? (
                <Link
                  to={"/application"}
                  className="w-28 bg-black rounded-md px-0 text-xs py-2  text-center text-gray-100 ."
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

              {user?.transactions?.length > 0 && (
                <button
                  onClick={handleShowAll}
                  className="bg-gray-200 rounded-full text-black px-2 text-xs"
                >
                  {displayActivities == 2 ? "see all" : "fold activity"}
                </button>
              )}
            </div>
            <p className="ml-2 text-xl text-gray-400">Loan history</p>
            {user?.transactions == 0 ? (
              <p className="ml-2 text-xs text-gray-400">No record</p>
            ) : (
              user?.transactions?.length > 0 &&
              user?.transactions
                ?.slice(0, displayActivities)
                .map((history, i) => (
                  <div className="flex  flex-col " key={i}>
                    <Activity
                      id={history.id}
                      name={history.loanData.loantype}
                      amount={history.loanData.amount}
                      date={history.date}
                      status={history.status}
                      paymentMethod={history.loanData.paymentMethod}
                      loanTerm={history.loanData.loanTerm}
                      callback={handleShowMore}
                    />
                  </div>
                ))
            )}
            <MoreInfo
              showMore={showMoreDetails}
              callback={handleCloseDetails}
              data={loanMoreInfo}
            />
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
        <div className="h-screen flex justify-start py-4 items-center flex-col bg-gray-100">
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