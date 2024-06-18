import { CheckCircle, Mail, MoneyDollar } from "react-huge-icons/solid";
const PaymentReceipt = ({
  firstname,
  photo,
  email,
  amount,
  id,
  approve,
  reject,
  isVerified,
  serverId,
}) => {
  return (
    <>
      <div className="flex max-sm:w-auto justify-start py-2 max-sm:h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
        <p className=" rounded-md  py-1 text-green-700 "> Payment Receipt</p>
        <div className="relative py-0.5 w-10 bg-green-700 -mt-2"></div>
        <p> Photos</p>
        <div
          className={`justify-start items-center gap-2 grid ${
            typeof photo == "object" ? "grid-cols-2" : "grid-cols-1"
          } `}
        >
          {typeof photo === "object" ? (
            photo.map((photoImage, i) => (
              <div className="relative" key={i}>
                <a href={photoImage}>
                  <img
                    src={photoImage}
                    alt="image"
                    className="w-30 h-30 object-contain"
                  />
                </a>
              </div>
            ))
          ) : (
            <img src={photo} alt="image" className="w-20 h-20 object-contain" />
          )}
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-gray-400 text-2xl"> Sender name : {firstname}</h1>
        </div>
        <div className="flex justify-start items-center gap-2 text-gray-400">
          Payment Status :
          <h1
            className={`${
              isVerified ? "bg-green-200" : "bg-red-200"
            } rounded-md px-2 py-0.5 ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
          >
            {" "}
            {isVerified ? (
              <p>
                Approved <CheckCircle className="text-2xl text-green inline" />
              </p>
            ) : (
              "Pending"
            )}
          </h1>
        </div>

        <div className="flex items-center justify-start gap-2">
          <Mail className="inline text-2xl" />
          <h4 className="max-sm:text-sm text-center text-gray-400">
            Email: {email}
          </h4>
        </div>
        <div className="flex items-center justify-start gap-2">
          <MoneyDollar className="inline text-2xl" />
          <h4 className="max-sm:text-xl text-center text-gray-400">
            Payment Amount: ${amount}
          </h4>
          {/* </p> */}
        </div>

        <div className="flex justify-start max-sm:w-auto items-center gap-1">
          {isVerified && (
            <button
              onClick={() => reject(id)}
              className="bg-red-500 px-3 max-sm:w-full max-md:w-full max-lg:w-full  py-2 rounded-md text-white"
            >
              Reject
            </button>
          )}
          {!isVerified && (
            <button
              onClick={() => approve(id, serverId)}
              className="bg-green-500 px-3 max-sm:w-full max-md:w-full max-lg:w-full  py-2 rounded-md text-white"
            >
              Approve
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentReceipt;
