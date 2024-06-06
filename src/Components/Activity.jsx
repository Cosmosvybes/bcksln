import { File, RemoveCircle } from "react-huge-icons/outline";
import {
  ListViewCircle,
  MenuCircleHorizontal,
  Money,
} from "react-huge-icons/solid";
import MoreInfo from "./MoreInfo";

const Activity = ({ name, amount, status, callback, id }) => {
  return (
    <>
      <div className="flex bg-gray-100 rounded-lg justify-between items-center px-10 max-sm:px-5 mt-2 py-2">
        <Money className="text-2xl text-amber-500" />{" "}
        <div className="flex flex-col gap-1">
          <p className="text-xs">{name}</p>
          <h1 className="text-xs font-thin">${amount}</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p
            style={{ color: status == "Approved" ? "green" : "Brown" }}
            className={`text-xs px-1 py-1 rounded-md font-thin ${
              status === "Approved" ? "bg-green-200" : "bg-yellow-200"
            }`}
          >
            {status}
          </p>
        </div>
        <MenuCircleHorizontal className="inline" onClick={() => callback(id)} />
      </div>
    </>
  );
};

export default Activity;
