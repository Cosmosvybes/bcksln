import { BadgePercent, Mail } from "react-huge-icons/solid";
const PaymentReceipt = ({
  firstname,
  imageOne,
  imageTwo,
  email,
  isVerified,
  id,
  approve,
  reject,
}) => {
  return (
    <>
      <div className="flex justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
        <p className=" text-white rounded-md px-1 py-1 bg-green-300 ">
          {" "}
          Payment Receipt
        </p>
        <div className="flex justify-start items-center">
          <a href={imageOne}>
            {" "}
            {imageOne && (
              <img
                src={imageOne}
                alt="user"
                className="h-12 w-16 rounded-md object-contain"
              />
            )}
          </a>
          <a href={imageTwo}>
            {id && (
              <img
                src={imageTwo}
                alt="user"
                className="h-12 w-16 object-contain rounded-md"
              />
            )}
          </a>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1> Sender: {firstname}</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Mail className="inline " />
          <h3 className="max-sm:text-xs text-center"> Email :{email}</h3>
        </div>
        <div className="flex items-center justify-start gap-2">
          <BadgePercent className="inline " />
          <p className="text-center ">
            Status{" "}
            <span style={{ color: isVerified ? "green" : "Brown" }}>
              {isVerified ? "Approved" : "Rejected"}{" "}
            </span>
          </p>
        </div>

        <div className="flex justify-start max-sm:w-auto items-center gap-1">
          <button
            onClick={() => reject(id)}
            className="bg-red-500 px-2 py-1 rounded-md text-white"
          >
            Reject
          </button>{" "}
          <button
            onClick={() => approve(id)}
            className="text-green-600 bg-green-300 rounded-md px-2 py-1"
          >
            Approve
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentReceipt;
