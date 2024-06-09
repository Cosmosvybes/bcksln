import { useLayoutEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import deposit from "../../assets/support.webp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

const Application = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
  const [loantype, setLoanType] = useState("");
  //handle loan term
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
    setLoanType(choice);
    let interestRate = loanChoice.interest * Number(amount);
    if (isNaN(interestRate)) {
      setLoanInterest("0.00");
    } else {
      setLoanInterest(interestRate.toFixed(2));
      setTotalDue(Number(amount) + Number(loanInterest));
      setRate(loanChoice.interest);
    }
  };
  const [directDeposit, setIsDirectDeposit] = useState(false);
  const [cryptoDeposit, setCrypto] = useState(false);
  const [paymentMethod, setMethod] = useState(undefined);
  const handlePaymentMethod = () => {
    let methods = document.querySelector("#paymentMethod");
    let choice = methods.options[methods.selectedIndex].value;

    if (choice === "Direct deposit (recommended)") {
      setIsCheck(false);
      setCrypto(!cryptoDeposit);
    } else if (choice === "Cryptocurrency (bitcoin)") {
      setIsCheck(!isCheck);
      setIsDirectDeposit(!directDeposit);
    } else if (choice === "Walmart MoneyCard") {
      setIsCheck(false);
      setIsDirectDeposit(!directDeposit);
      setCrypto(false);
    } else {
      setIsCheck(false);
    }
    setCrypto(choice === "Cryptocurrency (bitcoin)" && !cryptoDeposit);
    setIsDirectDeposit(
      choice === "Direct deposit (recommended)" && !directDeposit
    );
    if (choice === "Check") {
      setIsCheck(true);
    }
    setMethod(choice);
  };

  useLayoutEffect(() => {
    handleAmount();
    handleInterest();
  }, [loanInterest, amount]);

  const [monthlyEarningAmount, setMonthlyEarnings] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [AccountName, setAccountName] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [RoutingNumber, setRoutingNumber] = useState("");
  const [MailingAddress, setMailingAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [useIdAddress, setUseIdAddress] = useState(false);

  //function for loan application
  const handleApplication = async () => {
    setLoading(true);
    const employmentOption = document.querySelector("#employmentStatus");
    let employementStatus =
      employmentOption.options[employmentOption.selectedIndex].value;

    const convictionOption = document.querySelector("#convictionStatus");
    let isConvicted =
      convictionOption.options[convictionOption.selectedIndex].value;
    const veteranOption = document.querySelector("#veteranStatus");

    let isVeteran = veteranOption.options[veteranOption.selectedIndex].value;
    if (directDeposit) {
      let bankDetails = {
        bankName,
        AccountName,
        AccountNumber,
        RoutingNumber,
      };
      let data = {
        amount,
        loanTerm,
        loantype,
        monthlyEarningAmount,
        employementStatus,
        isConvicted,
        isVeteran,
        paymentMethod,
        ...bankDetails,
      };

      let serverResponse = await fetch(
        "https://bck-server.onrender.com/api/new-loan/apply",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!serverResponse.ok) {
        setLoading(false);
        let response = await serverResponse.json();
        toast.warning(response.response);
        return;
      }
      let response = await serverResponse.json();
      toast.success(response.response);
      setLoading(false);
    } else if (isCheck) {
      let mailingAddress = {
        postalCode,
        province,
        MailingAddress,
      };

      let data = {
        amount,
        loanTerm,
        loantype,
        monthlyEarningAmount,
        employementStatus,
        isConvicted,
        isVeteran,
        paymentMethod,
        ...mailingAddress,
      };

      let serverResponse = await fetch(
        "https://bck-server.onrender.com/api/new-loan/apply",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!serverResponse.ok) {
        setLoading(false);
        let response = await serverResponse.json();
        toast.warning(response.response);
        return;
      }
      let response = await serverResponse.json();
      setLoading(false);
      toast.success(response.response);
      navigate("/dashboard");
    } else if (cryptoDeposit) {
      let data = {
        amount,
        loanTerm,
        loantype,
        monthlyEarningAmount,
        employementStatus,
        isConvicted,
        isVeteran,
        walletAddress,
      };
      let serverResponse = await fetch(
        "https://bck-server.onrender.com/api/new-loan/apply",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!serverResponse.ok) {
        setLoading(false);
        let response = await serverResponse.json();
        toast.warning(response.response);
        return;
      }
      let response = await serverResponse.json();
      setLoading(false);
      toast.success(response.response);
      navigate("/dashboard");
    } else {
      let data = {
        amount,
        loanTerm,
        loantype,
        monthlyEarningAmount,
        employementStatus,
        isConvicted,
        isVeteran,
        walletAddress,
        paymentMethod: "Walmart MoneyCard",
      };
      let userToken = localStorage.getItem("userToken");
      let serverResponse = await fetch(
        `https://bck-server.onrender.com/api/new-loan/apply/${userToken}`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!serverResponse.ok) {
        setLoading(false);
        let response = await serverResponse.json();
        toast.warning(response.response);
        return;
      }
      let response = await serverResponse.json();
      setLoading(false);
      toast.success(response.response);
      navigate("/dashboard");
    }
  };

  //switch to add new mailing address
  const handleUseIDAddress = (e) => {
    if (e.currentTarget.checked) {
      setUseIdAddress(true);
    } else {
      setUseIdAddress(false);
    }
  };

  return (
    <>
      <section className="h-auto py-2 bg-gray-100">
        <div className="flex ml-4 justify-start  items-center">
          <button className="mt-0 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline" /> back
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col mt-2 justify-start ">
            <h1 className="text-black font-bold mt-2  text-7xl max-sm:text-2xl ml-6 max-sm:mt-3  max-lg:text-xs">
              {" "}
              Loan Application.
            </h1>
            <p className=" text-xs text-gray-400 ml-6">
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
          <div className="relative mt-2 w-auto text-black  bg-gray-50 h-auto  rounded-lg  py-2 px-1  max-sm:px-2">
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
                  <option key={type.id}>{type.name}</option>
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

                  <p className="text-black line-through font-extrabold">
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
                <p className="relative px-2 mr-0.5 text-black rounded-md w-36 text-center py-0  font-extrabold">
                  ${amount - charges}{" "}
                </p>
                <p className="relative px-2 text-xs mr-0.5 text-gray-400 rounded-md w-36 text-center  py-0 font-extrabold">
                  ${charges} {"charges "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full relative block py-2 px-1 rounded-md h-auto max-sm:w-full bg-gray-50 border-gray-300 mt-2">
            <h1 className="text-5xl max-sm:text-2xl ml-2 mb-2">
              Other details
            </h1>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-lg:grid-cols-2 px-2 max-sm:grid-cols-2 gap-2 bg-gray-100 h-auto rounded-lg py-2">
              <div className="flex justify-start flex-col max-sm:w-full">
                <p className="text-xs">Monthly Earning </p>
                <input
                  type="text"
                  value={monthlyEarningAmount}
                  onChange={(e) => setMonthlyEarnings(e.target.value)}
                  placeholder="$ 0.00"
                  className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                />
              </div>

              <div className="flex justify-start flex-col max-sm:w-full">
                <p className="text-xs">Employement status</p>
                <select
                  id="employmentStatus"
                  className="outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                >
                  <option>Unemployed</option>
                  <option>Employed</option>
                  <option>Retired</option>
                  <option>Student</option>
                </select>
              </div>

              <div className="flex justify-start flex-col max-sm:w-full">
                <p className="text-xs">Have you been convicted ?</p>
                <select
                  id="convictionStatus"
                  className="outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="flex justify-start flex-col max-sm:w-full">
                <p className="text-xs">Are you a veteran</p>
                <select
                  id="veteranStatus"
                  className="outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="flex justify-start flex-col max-sm:w-full">
                <p className="text-xs">Mode of disbursment</p>
                <select
                  className="outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  id="paymentMethod"
                  onChange={handlePaymentMethod}
                >
                  <option>Walmart Moneycard </option>
                  <option>Direct deposit (recommended)</option>
                  <option>Check</option>
                  <option>Cryptocurrency (bitcoin)</option>
                </select>
              </div>

              {useIdAddress && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Mailing Address </p>
                  <input
                    type="text"
                    placeholder="Mailling address"
                    value={MailingAddress}
                    onChange={(e) => setMailingAddress(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {useIdAddress && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Postal Code</p>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {useIdAddress && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">State/Province</p>
                  <input
                    type="text"
                    placeholder="State/Province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}

              {cryptoDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Recieving Wallet</p>
                  <input
                    type="text"
                    placeholder="Address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Bank name </p>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Account name</p>
                  <input
                    type="text"
                    placeholder="Account name"
                    value={AccountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Account No. </p>
                  <input
                    type="text"
                    placeholder="Account no."
                    value={AccountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}
              {directDeposit && (
                <div className="flex justify-start flex-col max-sm:w-full">
                  <p className="text-xs">Routing No. </p>
                  <input
                    type="text"
                    placeholder="Routing No."
                    value={RoutingNumber}
                    onChange={(e) => setRoutingNumber(e.target.value)}
                    className=" outline-gray-300 rounded-lg w-52 bg-gray-50 px-2 py-1 max-sm:w-full"
                  />
                </div>
              )}

              <div
                className={`${
                  isCheck ? "flex" : "hidden"
                } justify-start items-center gap-2 mt-2  max-sm:w-full`}
              >
                <input
                  type="checkbox"
                  value={useIdAddress}
                  onChange={handleUseIDAddress}
                />
                <p className="text-xs"> use new mailing address.</p>
              </div>
            </div>
            <div className="flex w-full  justify-start px-2">
              <div className="flex justify-start flex-col max-sm:w-full mt-2">
                {loading ? (
                  <div className="relative flex justify-end w-full max-sm:w-full items-center">
                    <Spinner type="border" className="mt-1 text-end" />
                  </div>
                ) : (
                  <button
                    onClick={handleApplication}
                    className="bg-black rounded-lg py-3 text-center text-white w-52 bg-gray-50max-sm:w-full hover:bg-gray-900"
                  >
                    Apply now <ArrowRight className="inline text-2xl" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
