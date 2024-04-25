import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import image from "../assets/review.png";
import card from "../assets/activate.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Qrcode from "../assets/IMG-20240423-WA0025.jpg";
import { Copy, ImageAdd, Share } from "react-huge-icons/solid";
const Initialpayment = () => {
  const [wallet] = useState("1GVoDGMcnbJbdeoe2XtCdvsdcAuCkE4ZxC");
  const [response, setResponse] = useState("");
  const [switchPay, setSwitch] = useState("Walmart MoneyCard");
  const handlePaymentSwitch = () => {
    const paymentType = document.querySelector("#paymentype");
    let choice = paymentType.options[paymentType.selectedIndex].value;
    setSwitch(choice);
  };
  const handleCopyText = () => {
    setResponse("Text copied to clipboard");
    navigator.clipboard.writeText(wallet);
  };

  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 3000);
  }, [response]);
  const [imageUpload, setImageUpload] = useState(null);
  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImageUpload(imageUrl);
  };

  return (
    <>
      {switchPay == "Walmart MoneyCard" ? (
        <section className="bg-gray-100 relative h-screen py-2  max-sm:h-screen px-8 max-sm:px-4">
          <div className="flex ml-0 justify-start  items-center">
            <button className="mt-4 mb-2 ml-0" onClick={() => history.back()}>
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
              Change Payement
            </strong>
            <select
              className="ml-2 bg-gray-50 outline-gray-200 rounded-lg"
              id="paymentype"
              onChange={handlePaymentSwitch}
            >
              <option>Walmart MoneyCard</option>
              <option>Cryptocurrency (bitcoin)</option>
            </select>
          </div>

          <div className="flex w-full py-2 h-auto mt-3 bg-slate-50  flex-col justify-center items-center">
            <img
              src={card}
              alt="card-image"
              className="w-52 h-52 object-contain"
            />
            <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-1 px-2">
              <div className="flex flex-col">
                <strong className="ml-2 text-center text-gray-400 ">
                  CARD NUMBER
                </strong>
                <input
                  type="phone"
                  placeholder="XXXX XXXX XXXX XXXX"
                  max={16}
                  className="card number px-1 outline-gray-200 py-2"
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
                  className="card number px-1 outline-gray-200 py-2 text-center"
                />
              </div>
              <div className="flex flex-col">
                <strong className="ml-2 text-center text-gray-400">
                  SECURITY CODE
                </strong>
                <input
                  type="phone"
                  placeholder="CVV"
                  max={16}
                  className="card number px-1 outline-gray-200 py-2 text-center"
                />
              </div>
              <div className="flex flex-col">
                <strong className="ml-2 text-center text-gray-400">
                  CARD BALANCE
                </strong>
                <input
                  type="phone"
                  placeholder="AMOUNT"
                  max={16}
                  className="card number px-1 outline-gray-200 py-2 text-center"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end items-center  mt-2">
            <Link
              to={"/frontside"}
              className="bg-black rounded-lg py-3 text-center text-white w-52 max-sm:w-full hover:bg-gray-900"
            >
              NEXT <ArrowRight className="inline text-2xl" />
            </Link>
          </div>
        </section>
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
            <div className="flex  justify-center items-center">
              <div className="flex w-20 h-auto py-1 mr-1 px-1 rounded-md ">
                {imageUpload && (
                  <img
                    src={imageUpload}
                    alt="uploaded image"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <p className="inline">Upload Payment receipt</p>{" "}
              <ArrowRight className="text-4xl max-sm:text-2xl inline" />
              <label htmlFor="crypto-receipt">
                <ImageAdd className="text-4xl max-sm:text-2xl inline z-10" />
              </label>
            </div>
            <div className="flex  justify-center items-center">
              <p className="inline">Amount paid</p>{" "}
              <ArrowRight className="text-4xl max-sm:text-2xl inline" />
              <input
                type="number"
                placeholder="$0.00"
                className="bg-gray-200 px-2 py-2 w-28 outline-gray-100 rounded-md"
              />
            </div>
            <Link
              to={`/checking-crypto-payment`}
              className="bg-black rounded-lg py-3 text-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
            >
              SEND RECEIPT <ArrowRight className="inline text-2xl" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Initialpayment;
