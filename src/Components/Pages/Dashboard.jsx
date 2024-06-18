import {
  ArrowDownRectangle,
  ArrowRight,
  MenuLineHorizontal,
} from "react-huge-icons/outline";
// import review from "../../assets/review.png";
// import picture from "../../assets/profilepic.png";
import img from "../../assets/revolving_deposit.webp";
import { Link } from "react-router-dom";
import Loan from "./Loan";
import { useLayoutEffect, useState } from "react";
import Activity from "../Activity";
import {
  CardAdd,
  LogoutOpen,
  Mail,
  NotificationWithCircle,
  RemoveRectangle,
  UserCircle,
} from "react-huge-icons/solid";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../brain/user";
import MoreInfo from "../MoreInfo";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import ReviewPage from "./ReviewPage";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

const Dashboard = () => {
  let navigate = useNavigate();
  const { user, isLoading, accountCard } = useSelector(
    (state) => state.userSlice
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getUser());
  }, []);

  const [loans] = useState([
    { id: 1, name: "Mortage", interest: 0.05, amount: "400,000" },
    { id: 2, name: "Student loan", interest: 0.02, amount: "40,000 " },
    { id: 3, name: "Auto loans", interest: 0.05, amount: "50,000" },
    { id: 4, name: "Business loans ", interest: 0.1, amount: "500,000" },
    { id: 5, name: "Salary advance ", interest: 0.03, amount: "7,000" },
    { id: 45, name: "Personal loans ", interest: 0.04, amount: "100,000" },
  ]);

  const [displayActivities, setActivities] = useState(2);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [loanMoreInfo, setMoreInfo] = useState({});
  const [showMenu, setShowDashboard] = useState(false);

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

  const handleShowMenu = () => {
    setShowDashboard(!showMenu);
  };

  const [currentPage, setCurrentPage] = useState("main Page");
  const [pages] = useState(["main Page", "new loan", "profile"]);

  const navigatePage = (pageName) => {
    setCurrentPage(pages.find((page) => page === pageName));
    setShowDashboard(false);
  };

  const MainPage = () => {
    return (
      <>
        <div className="flex px-0 max-sm:px-0  justify-between items-center  mt-1 bg-gray-50 rounded-lg">
          <div className="relative flex justify-start   items-center">
            <MenuLineHorizontal
              className={` ${
                !showMenu ? "z-30" : "z-0"
              } text-amber-600 text-6xl max-sm:block hidden`}
              onClick={handleShowMenu}
            />
            <h1 className="text-5xl font-bold max-sm:text-2xl text-gray-400  max-sm:font-bold">
              Hello, {user?.firstname}
              <p className=" text-xs text-gray-400 -mt-2">
                Maximize your financial potential🎉{" "}
              </p>
            </h1>
          </div>
          <div className="relative">
            <NotificationWithCircle className="text-amber-700 text-3xl" />
          </div>

          {/* <Link to={"/profile"} className="">
            <img
              src={picture}
              alt="profil picture"
              className="w-20 h-20 object-cover rounded-full max-sm:w-16 max-sm:h-16 max-sm:rounded-full"
            />
          </Link> */}
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
            $ {user.accountBalance}
            .00
          </h1>
          <div className="flex flex-col justify-start">
            <strong className="text-sm font-bold text-gray-50">
              Deposit balance (20% of loan)
            </strong>
            <p className="text-xl max-sm:text-sm text-gray-100 font-thin">
              $ 1000.00
            </p>
          </div>

          <hr className="text-amber-100" />
          <div className="relative  block">
            <p className="text-gray-50 text-xs ml-1">Card Linked</p>

            <p className="text-gray-100 inline">
              {" "}
              <CardAdd className="text-3xl text-black inline" />
              {user.cards.length > 0 ? (
                String(accountCard.firstCard).slice(0, 7) + "..."
              ) : (
                <p> card not linked yet</p>
              )}
            </p>
          </div>
          <div className="flex w-full justify-start gap-3 max-sm:justify-between items-center">
            <Link
              to={"/deposit"}
              className="w-28 bg-black rounded-md px-0 text-xs py-2  text-center text-gray-100  "
            >
              Deposit
              <ArrowDownRectangle className="text-white text-xs ml-0.5 inline" />
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

        <div className="relative mt-2 bg-gray-50 h-auto w-full rounded-lg  py-3 px-1   max-sm:px-0">
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
                    status={history.isApproved}
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

        <div className="relative mt-2 bg-gray-50 h-auto w-full rounded-lg  py-3 px-1  max-sm:px-0">
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
      </>
    );
  };

  const handlePageSwitch = () => {
    switch (currentPage) {
      case "main Page":
        return <MainPage />;
      case "profile":
        return (
          <div className="relative block">
            <Profile
              showMenu={showMenu}
              navButton={
                <MenuLineHorizontal
                  className="text-amber-600  text-6xl"
                  onClick={handleShowMenu}
                />
              }
            />
          </div>
        );
      default:
        return <MainPage />;
    }
  };

  let dashboardContainer = (
    <div className="h-auto w-full max-sm:overflow-scroll  bg-gray-100 relative  py-0 max-sm:px-2 px-8">
      {handlePageSwitch()}
    </div>
  );
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    if (!localStorage.getItem("userToken")) navigate("/");
    toast.success("account signed out");
  };

  return (
    <>
      {user?.isVerified ? (
        <section className="h-screen flex justify-between overflow-y-clip max-sm:overflow-y-scroll">
          <div className="relative w-96 bg-amber-500 h-screen flex-col max-sm:hidden max-md:hidden">
            <div className="relative w-full bg-amber-500 flex justify-start px-2 items-center h-24">
              <h1 className="text-3xl font-extrabold  max-sm:text-2xl mb-2 ml-2">
                Dashboard
              </h1>
            </div>
            <div className="relative flex flex-col justify-start gap-1 px-2 py-1">
              <button
                className="w-full py-2 text-left px-2 rounded-md text-black hover:underline"
                onClick={() => navigatePage("card")}
              >
                <CardAdd className="inline text-3xl" />
                My Account{" "}
              </button>
              <button
                className="w-full py-2 text-left px-2  hover:underline rounded-md  text-black"
                onClick={() => navigatePage("profile")}
              >
                <UserCircle className="inline text-3xl" />
                Profile{" "}
              </button>

              <button
                className="w-full py-2 text-left px-2 hover:underline rounded-md text-black"
                onClick={() => navigatePage("main Page")}
              >
                <Mail className="inline text-4xl" /> Send message{" "}
              </button>
              <button
                className="w-full py-2 text-left hover:underline px-2 rounded-md text-black hover:text-amber-700"
                onClick={handleLogout}
              >
                <LogoutOpen className="inline text-3xl" /> Sign out{" "}
              </button>
            </div>
          </div>

          <div
            style={{ width: showMenu ? "60%" : "0%" }}
            className={`absolute left-0  bg-amber-500 hidden flex-col  duration-500 max-sm:flex max-md:flex h-screen  z-10`}
          >
            <div
              style={{ opacity: showMenu ? "1" : "0", transition: "0.9s" }}
              className="relative w-full bg-amber-500 flex justify-between px-2 items-center h-16"
            >
              <h1 className="font-bold  max-sm:text-2xl ml-4">Dashboard</h1>
              <RemoveRectangle className="text-4xl" onClick={handleShowMenu} />
            </div>

            {showMenu && (
              <div className="relative flex flex-col justify-start gap-1 px-2 py-1">
                <button
                  className="w-full py-2 text-left px-2 rounded-md text-black hover:underline"
                  onClick={() => navigatePage("card")}
                >
                  <CardAdd className="inline text-4xl" />
                  My Account{" "}
                </button>
                <button
                  className="w-full py-2 text-left px-2  hover:underline rounded-md  text-black"
                  onClick={() => navigatePage("profile")}
                >
                  <UserCircle className="inline text-4xl" />
                  Profile{" "}
                </button>

                <button
                  className="w-full py-2 text-left px-2 hover:underline rounded-md text-black"
                  onClick={() => navigatePage("main Page")}
                >
                  <Mail className="inline text-4xl" /> Send message{" "}
                </button>
                <button
                  className="w-full py-2 text-left hover:underline px-2 rounded-md text-black hover:text-amber-700"
                  onClick={handleLogout}
                >
                  <LogoutOpen className="inline text-4xl" /> Sign out{" "}
                </button>
              </div>
            )}
          </div>
          {dashboardContainer}
        </section>
      ) : (
        <div className="relative">
          {isLoading ? (
            <div className="relative flex justify-center h-screen items-center">
              <Spinner type="border" />
            </div>
          ) : (
            <ReviewPage />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
