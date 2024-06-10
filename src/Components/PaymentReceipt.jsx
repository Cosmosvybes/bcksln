import { Mail, MoneyDollar } from "react-huge-icons/solid";
const PaymentReceipt = ({
  firstname,
  photo,
  email,
  amount,
  id,
  approve,
  reject,
  isVerified,
}) => {
  return (
    <>
      <div className="flex max-sm:w-auto justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
        <p className=" rounded-md  py-1 text-green-700 "> Payment Receipt</p>
        <div className="relative py-0.5 w-10 bg-green-700 -mt-2"></div>
        <p> Photos</p>
        <div
          className={`justify-start items-center grid ${
            typeof photo == "object" ? "grid-cols-2" : "grid-cols-1"
          } `}
        >
          {typeof photo === "object" ? (
            photo.map((photoImage, i) => (
              <div className="relative" key={i}>
                <img
                  src={photoImage}
                  alt="image"
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))
          ) : (
            <img
              src={photo}
              alt="image"
              className="w-10 h-10 object-contain "
            />
          )}
        </div>
        <div className="flex justify-start items-center gap-2">
          Status
          <h1
            className={`${
              isVerified ? "bg-green-200" : "bg-red-200"
            } rounded-md px-2 py-1 ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
          >
            {" "}
            {isVerified ? "Approved" : "Pending"}
          </h1>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1> Sender {firstname}</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Mail className="inline text-2xl" />
          <h3 className="max-sm:text-xs text-center">Email {email}</h3>
        </div>
        <div className="flex items-center justify-start gap-2">
          {/* <BadgePercent className="inline text-2xl " /> */}
          {/* <p className="text-center "> */}
          <MoneyDollar className="inline text-2xl" />
          <h3 className="max-sm:text-xs text-center">Amount ${amount}</h3>
          {/* </p> */}
        </div>

        <div className="flex justify-start max-sm:w-auto items-center gap-1">
          {isVerified && (
            <button
              onClick={() => reject(id)}
              className="bg-red-500 px-3 py-2 rounded-md text-white"
            >
              Reject
            </button>
          )}
          {!isVerified && (
            <button
              onClick={() => approve(id)}
              className="text-green-600 bg-green-300 rounded-md px-3 py-2"
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
