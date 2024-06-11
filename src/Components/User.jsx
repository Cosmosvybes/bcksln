import {
  BadgePercent,
  CheckCircle,
  InformationCircle,
  Mail,
} from "react-huge-icons/solid";
import { Spinner } from "reactstrap";

const User = ({
  firstname,
  lastname,
  email,
  isVerified,
  photo,
  id,
  approve,
  reject,
  IDType,
  loading,
}) => {
  return (
    <div className="flex max-sm:w-auto justify-start py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
      <p className="  rounded-md py-1 text-green-700 "> Identity Info</p>
      <div className="relative ml-0 py-0.5 w-10 bg-green-700 -mt-2"></div>
      <div className={`justify-start px-0  flex gap-1  items-center  `}>
        {photo.map((photoImage, i) => (
          <div className="relative border rounded-md px-1" key={i}>
            <a href={photoImage} className="rounded-md">
              <img
                src={photoImage}
                alt="image"
                className="w-16 h-14 rounded-md object-contain"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex  justify-start items-center gap-2">
        <h1>ID Type : {IDType}</h1>
      </div>
      <div className="flex  justify-start items-center gap-2">
        {" "}
        Name
        <h1> {firstname}</h1>
        <h1> {lastname}</h1>
      </div>
      <div className="flex items-center  justify-start gap-2">
        <Mail className="inline  text-3xl " />
        <h3 className="max-sm:text-xs text-center"> Email :{email}</h3>
      </div>
      <div className="flex items-center  justify-start gap-2">
        <InformationCircle className="inline text-3xl " />
        <p className="text-center ">
          Status{" "}
          <span style={{ color: isVerified ? "green" : "Brown" }}>
            {isVerified ? (
              <p className="inline text-gray-400">
                {" "}
                Approved <CheckCircle className="text-xl text-green-500 inline" />{" "}
              </p>
            ) : (
              "Pending"
            )}{" "}
          </span>
        </p>
      </div>

      {loading ? (
        <Spinner type="border" />
      ) : (
        <div className="flex  justify-start max-sm:w-auto items-center gap-1">
          {isVerified && (
            <button
              onClick={() => reject(id)}
              className="bg-red-500 px-3 py-2 rounded-md hover:bg-red-700 text-white"
            >
              Reject
            </button>
          )}
          {!isVerified && (
            <button
              onClick={() => approve(id)}
              className="text-green-600 bg-green-300 hover:bg-green-700 rounded-md px-3 py-2"
            >
              Approve
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
