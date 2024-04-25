import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import image from "../assets/review.png";
import card from "../assets/walmart.jpg";
import activate from "../assets/activate.png";
import card1 from "../assets/Screenshot_20240423-142507_WhatsApp.jpg";
import card2 from "../assets/Screenshot_20240423-142549_WhatsApp.jpg";
import scanQr from "../assets/qrcode.png";
import proof from "../assets/proof.png";
import send from "../assets/send.png";
import { Link } from "react-router-dom";
const Deposit = () => {
  return (
    <>
      <section className="bg-gray-100 relative h-auto py-2   max-sm:h-auto px-8 max-sm:px-2">
        <div className="flex ml-2 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-8xl font-extrabold max-sm:ml-2  max-sm:text-4xl mb-3 ml-1">
            Deposit
          </h1>
          <img src={image} className="w-30 h-20" alt="image" />
        </div>
        <strong className="ml-2 text-gray-400  text-4xl max-sm:text-xl text-left font-thin ">
          How to make your initial deposit
        </strong>

        <div className="flex justify-between flex-col max-sm:flex-col  h-auto rounded-md mt-2 px-2">
          <div className="flex flex-col bg-gray-200 w-full h-full">
            {" "}
            <strong className="ml-2 text-gray-500   text-xl max-sm:text-xl text-left font-thin ">
              Payment with
              <p className="text-blue-700 inline"> Walmart MoneyCard </p>{" "}
            </strong>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-1 px-2 py-2">
              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  1
                </h1>
                <img
                  src={card}
                  className="w-20 h-20 object-cover rounded-lg ml-2"
                  alt="card-imag"
                />
                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-blue-700 mb-2">
                  Purchase Walmart MoneyCard
                </strong>
                <div className="flex w-80 flex-col max-md:w-auto  max-lg:w-auto">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    With your Walmart MoneyCard in hand, tell the Associate how
                    much you want to add to the card.
                  </p>
                  <p className="text-gray-400 text-xs ml-2 mt-2">
                    <strong>NOTE - </strong>Ensure your initial deposit on the
                    card is worth 20% of the loan you're getting from bucksloan.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  2
                </h1>
                <div className="flex justify-start items-center">
                  <img
                    src={card1}
                    className="w-20 h-20 object-cover ml-2 rounded-l"
                    alt="card-imag"
                  />
                  <img
                    src={card2}
                    className="w-20 h-20 object-cover ml-2 rounded-lg"
                    alt="card-imag"
                  />
                </div>

                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-blue-700 mb-2">
                  Acceptable Walmart MoneyCard
                </strong>
                <div className="flex w-80 flex-col max-md:w-auto max-lg:w-auto">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    Before the checkout, ensure that your are purchasing the
                    walmart MoneyCard supported by bucksloan.
                  </p>
                  <p className="text-gray-400 text-xs ml-2 mt-2">
                    <strong>SUPPORTED CARD NUMBERS- </strong> (4020 & 5181)
                  </p>
                </div>
              </div>
              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  3
                </h1>
                <img
                  src={activate}
                  className="w-20 h-20 object-cover ml-2"
                  alt="card-imag"
                />
                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-blue-700 mb-2">
                  Merge your card with your loan account
                </strong>
                <div className="flex w-80 flex-col max-md:w-auto max-lg:w-auto">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    Now,connect your card with your loan account by uploading
                    your card details to your bucksloan account.
                  </p>
                  {/* <p className="text-gray-400 text-xs ml-2">
                    <strong>NOTE - </strong>Ensure your initial deposit is worth
                    20% of the loan you getting from bucksloan.
                  </p> */}
                </div>
              </div>

              {/* <div className="relative w-full bg-gray-100 rounded-md h-44"></div> */}
            </div>
          </div>
          <div className="flex flex-col bg-gray-200 w-full h-full">
            {" "}
            <strong className="ml-2 text-gray-500  text-2xl max-sm:text-xl text-left font-thin ">
              Payment with
              <p className="text-amber-500 inline ml-1">CryptoCurrency </p>{" "}
            </strong>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-1 px-2 py-2">
              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  1
                </h1>
                <img
                  src={scanQr}
                  className="w-20 h-20 object-cover"
                  alt="card-imag"
                />
                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-amber-500 mb-2">
                  Scan the payment QrCode
                </strong>
                <div className="flex w-80 max-md:w-auto flex-col">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    Scan the QR code on your account to initiate the payment. Or
                    copy the wallet address to make peer to peer transaction to
                    your account.
                  </p>
                  <p className="text-gray-400 text-xs ml-2 mt-2">
                    <strong>NOTE - </strong>Ensure your initial deposit is worth
                    20% of the loan you getting from bucksloan.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  2
                </h1>
                <img
                  src={send}
                  className="w-20 h-20 object-cover ml-2"
                  alt="card-imag"
                />
                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-amber-500 mb-2">
                  Make payment
                </strong>
                <div className="flex w-80 flex-col max-md:w-auto max-lg:w-auto">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    Initiate the down payment by depositing the 20% worth of the
                    loan you are getting from your account.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-start py-2   flex-col w-full bg-gray-100 rounded-md h-auto">
                <h1 className="absolute right-0 top-1  text-7xl text-gray-300">
                  3
                </h1>
                <img
                  src={proof}
                  className="w-20 h-20 object-cover ml-2"
                  alt="card-imag"
                />
                <strong className="text-2xl ml-2  font-thin max-sm:text-xl text-amber-500 mb-2">
                  Provide the proof of payment
                </strong>
                <div className="flex w-80 flex-col max-md:w-auto max-lg:w-auto">
                  <p className="ml-2 text-gray-500 max-sm:text-xs ">
                    Finally, send the proof of your payment, by uploading the
                    transaction reciept prior to the payment .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end items-center  mt-2">
            <Link
              to={"/initial/deposit"}
              className="bg-black rounded-lg py-3 text-center text-white w-52 max-sm:w-full hover:bg-gray-900"
            >
              Proceed now <ArrowRight className="inline text-2xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deposit;
