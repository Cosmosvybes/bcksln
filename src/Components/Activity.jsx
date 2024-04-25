import { File } from "react-huge-icons/outline";

const Activity = ({ name, amount, date, status }) => {
  return (
    <>
      <div className="flex bg-gray-100 rounded-lg justify-between items-center px-10 max-sm:px-2 mt-2 py-2">
        <File className="text-2xl text-amber-500" />{" "}
        <div className="flex flex-col gap-1">
          <p className="text-xs">{name}</p>
          <h1 className="text-xs font-thin">{amount}</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p
            style={{ color: status == "Approved" ? "green" : "Brown" }}
            className="text-xs font-thin"
          >
            {status}
          </p>
          <p className="text-xs font-thin">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Activity;
