import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import deposit from "../assets/revolving_deposit.webp";
import { Link } from "react-router-dom";
const Application = () => {
  const [loanTypes] = useState([
    { id: 1, name: "Mortage loans", interest: 0.05 },
    { id: 2, name: "Salary advance", interest: 0.03 },
    { id: 3, name: "Auto loans", interest: 0.07 },
    { id: 4, name: "Pool loans", interest: 0.06 },
    { id: 5, name: "Business loans", interest: 0.1 },
  ]);
  const [loanInterest, setLoanInterest] = useState("");
  const [totalDue, setTotalDue] = useState("");
  const [amount, setAmount] = useState(undefined);
  const [loanTerm, setLoanTerm] = useState(6);
  const [monthlyPay, setMonthlyPay] = useState("");
  const [charges, setCharges] = useState(0);
  const handleLoanTerm = (e) => {
    let loanAmount = amount;
    let monthlyPay = loanAmount / e.target.value;
    setMonthlyPay(Number(monthlyPay.toFixed(0)));
    setLoanTerm(e.target.value);
  };

  const handleAmount = () => {
    const values = document.querySelector("#loans");
    const amount = values.options[values.selectedIndex].value;
    let monthlyPay = amount / loanTerm;
    setAmount(amount);
    setCharges(amount * 0.01);
    setMonthlyPay(Number(monthlyPay.toFixed(0)));
  };
  const [interestRate, setRate] = useState("");
  const handleInterest = () => {
    const loansType = document.querySelector("#loantype");
    const choice = loansType.options[loansType.selectedIndex].value;
    let loanChoice = loanTypes.find((loan) => loan.name == choice);
    let interestRate = loanChoice.interest * Number(amount);
    if (isNaN(interestRate)) {
      setLoanInterest("0.00");
    } else {
      setLoanInterest(interestRate.toFixed(2));
      setTotalDue(Number(amount) + Number(loanInterest));
      setRate(loanChoice.interest);
    }
  };
  const [directDeopist, setIsDirectDeposit] = useState(false);
  const [cryptoDeposit, setCrypto] = useState(false);
  const handlePaymentMethod = () => {
    let methods = document.querySelector("#paymentMethod");
    let choice = methods.options[methods.selectedIndex].value;

    setCrypto(choice === "Cryptocurrency (bitcoin)" && true);
    setIsDirectDeposit(choice === "Direct deposit (recommended)" && true);
  };

  useEffect(() => {
    handleAmount();
    handleInterest();
  }, [loanInterest, amount]);

  return (
    <>
      <section className="h-auto py-2 bg-gray-100">
        <div className="flex ml-4 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline" /> back
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col mt-2 justify-start ">
            <h1 className="text-black font-bold mt-2  text-7xl max-sm:text-2xl ml-3 max-sm:mt-3  max-lg:text-xs">
              {" "}
              Loan Application.
            </h1>
            <p className=" text-xs text-gray-400 ml-4">
              Apply and get funded same day 🤑
            </p>
          </div>

          <img
            src={deposit}
            alt="deposit-imgae"
            className="w-2o object-cover h-20"
          />
        </div>
        <div className="flex justify-between gap-2 items-start h-auto max-sm:flex-col">
          <div className="relative mt-2 w-auto text-black  bg-gray-50 h-auto  rounded-lg  py-2 px-5  max-sm:px-2">
            <div className="flex justify-start items-center w-96 max-sm:w-auto max-sm:h-auto  h-auto max-sm:text-xs px-2 rounded-md bg-green-300">
              <p className="text-green-600 py-1 px-1">
                <strong className="text-green-700"> EXCITING NEWS: </strong>{" "}
                Your first loan with us comes with 0% interest rate, meaning you
                can borrow without incurring any interest charges. This offer
                covers the enter loan amount.Enjoy this hassle-free loan
                experience with us.
              </p>
            </div>
            <h1 className="text-3xl font-thin">Loan details</h1>
            <div className="flex w-96  max-sm:w-auto rounded-md items-center justify-between mb-2 mt-3">
              <h1 className="text-xl font-thin max-sm:text-xl  text-black  max-sm:font-thin">
                Loan Type
              </h1>
              <select
                className="bg-gray-200 text-black text-xs outline-gray-300 px-2 py-2 rounded-md mr-0.5 w-36"
                id="loantype"
                onChange={handleInterest}
              >
                {loanTypes.map((type) => (
                  <optgroup key={type.id}>
                    <option>{type.name}</option>
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="flex w-96  max-sm:w-auto rounded-md items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <h1 className="text-xl text-black font-thin max-sm:text-xl     max-sm:font-thin">
                  Amount
                </h1>
                <p className="inline text-xs text-gray-400">$1k-50k</p>
              </div>{" "}
              <select
                id="loans"
                className="bg-gray-200 text-black outline-gray-300 text-xs px-2 py-2 rounded-md mr-0.5 w-36"
                onChange={handleAmount}
              >
                <option>0</option>
                <option>2000</option>
                <option>3000</option>
                <option>5000</option>
                <option>10000</option>
                <option>50000</option>
                <option>100000</option>
                <option>150000</option>
                <option>200000</option>
              </select>
            </div>
            <div className="flexflex-col w-96  mt-2 bg-gray-200  max-sm:w-auto rounded-md items-center justify-between px-2 py-3">
              <div className="flex w-full border flex-col  bg-gray-50  text-gray-500 justify-between mb-2 rounded-md px-1 py-3">
                <p> Default Loan Term: {loanTerm} Month(s) </p>
                <p className="text-gray-400 ">
                  You can set your preferred loan term below
                </p>
              </div>
              <p className="text-gray-500 ml-1">
                The standard repayment period begins one month after borrowers
                reeive their loan.
              </p>
              <h1 className="font-semibold ml-1">
                Monthly payment: ${monthlyPay}
              </h1>
              <div className="flex justify-start items-center py-2 ml-1">
                {" "}
                <p className="font-semibold text-sm">Set Loan term </p>{" "}
                <input
                  type="range"
                  value={loanTerm}
                  max={60}
                  min={6}
                  className="ml-2"
                  onChange={handleLoanTerm}
                />
              </div>{" "}
              <div className="flex  w-full h-28 ">
                <div className="relative h-full  flex-col border flex justify-center items-center bg-gray-50 w-48 max-sm:w-full">
                  <p className="font-thin text-gray-400">INTEREST</p>

                  <p className="text-black font-extrabold">
                    $ {String(loanInterest)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {" "}
                    %{interestRate} intrest rate
                  </p>
                </div>
                <div className="relative h-full  flex-col border flex justify-center items-center bg-gray-50 w-48 max-sm:w-full">
                  <p className="font-thin text-gray-400">TOTAL DUE</p>
                  <p className="text-black font-extrabold">$ {totalDue}</p>
                </div>
              </div>
            </div>

            <div className="flex w-96 max-sm:w-auto rounded-md items-center justify-end gap-4 mt-2">
              <p className="font-thin text-xs   text-gray-500  max-sm:font-thin">
                You will receive{" "}
                <ArrowRight className="inline text-black text-2xl" />
              </p>
              <div className="flex flex-col">
                <p className="relative px-2 mr-0.5 text-black rounded-md w-36 text-center py-2  font-extrabold">
                  ${amount}{" "}
                </p>
                <p className="relative px-2 text-xs mr-0.5 text-gray-400 rounded-md w-36 text-center py-2  font-extrabold">
                  ${charges}
                  {" "}
                  {"charges "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full relative block py-2 px-1 rounded-md h-auto max-sm:w-full bg-gray-50 border-gray-300 mt-2">
            <h1 className="text-5xl max-sm:text-2xl ml-2 mb-2">
              Other details
            </h1>
            <div className="grid grid-cols-2 px-2 max-sm:grid-cols-1 bg-gray-100 h-auto rounded-lg py-2">
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>How much do you earn ?</strong>
                <input
                  type="text"
                  placeholder="Monthly earnings"
                  className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                />
              </div>

              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Employement status</strong>
                <select className="outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full">
                  <option>Unemployed</option>
                  <option>Employed</option>
                  <option>Retired</option>
                  <option>Student</option>
                </select>
              </div>

              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Have you been convicted ?</strong>
                <select className="outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Are you a veteran</strong>
                <select className="outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Mail Address</strong>
                <input
                  type="text"
                  placeholder="Mailing address"
                  className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                />
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Postal</strong>
                <input
                  type="text"
                  placeholder="Postal code"
                  className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                />
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>State/Province</strong>
                <input
                  type="text"
                  placeholder="State/Province"
                  className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                />
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <strong>Mode of disbursment</strong>
                <select
                  className="outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  id="paymentMethod"
                  onChange={handlePaymentMethod}
                >
                  <option>Walmart Moneycard </option>
                  <option>Direct deposit (recommended)</option>
                  <option>Check</option>
                  <option>Cryptocurrency (bitcoin)</option>
                </select>
              </div>
              {cryptoDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <strong>Recieving Wallet</strong>
                  <input
                    type="text"
                    placeholder="Address"
                    className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeopist && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <strong>Bank name </strong>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeopist && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <strong>Account name</strong>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeopist && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <strong>Account No. </strong>
                  <input
                    type="text"
                    placeholder="Account no."
                    className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeopist && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <strong>Routing No. </strong>
                  <input
                    type="text"
                    placeholder="Routing No."
                    className=" outline-gray-300 rounded-lg w-52  px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
            </div>
            <div className="flex w-full  justify-start px-2">
              <div className="flex justify-start flex-col max-sm:w-full mt-2">
                <Link
                  to={"/comfirmation"}
                  className="bg-black rounded-lg py-3 text-center text-white w-52 max-sm:w-full hover:bg-gray-900"
                >
                  Proceed <ArrowRight className="inline text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
