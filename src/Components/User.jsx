import { BadgePercent, Mail } from "react-huge-icons/solid";

const User = ({
  firstname,
  lastname,
  email,
  isVerified,
  user,
  idn,
  id,
  approve,
  reject,
}) => {
  return (
    <div className="flex justify-center py-2 max-sm: h-auto  px-2 flex-col bg-gray-100 rounded-md gap-2">
      <p className=" text-white rounded-md px-1 py-1 bg-green-300 ">
        {" "}
        Identity Info
      </p>
      <div className="flex justify-center items-center">
        <a href={user}>
          {" "}
          {user && (
            <img
              src={user}
              alt="user"
              className="h-12 w-16 rounded-md object-contain"
            />
          )}
        </a>
        <a href={idn}>
          {id && (
            <img
              src={idn}
              alt="user"
              className="h-12 w-16 object-contain rounded-md"
            />
          )}
        </a>
      </div>
      <div className="flex justify-center items-center gap-2">
        <h1> {firstname}</h1>
        <h1> {lastname}</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Mail className="inline " />
        <h3 className="max-sm:text-xs text-center"> Email :{email}</h3>
      </div>
      <div className="flex items-center justify-center gap-2">
        <BadgePercent className="inline " />
        <p className="text-center ">
          Status{" "}
          <span style={{ color: isVerified ? "green" : "Brown" }}>
            {isVerified ? "Approved" : "Rejected"}{" "}
          </span>
        </p>
      </div>

      <div className="flex justify-center max-sm:w-auto items-center gap-1">
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
  );
};

export default User;
