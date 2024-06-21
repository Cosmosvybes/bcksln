import { File, RemoveCircle } from "react-huge-icons/outline";
import {
  CheckCircle,
  InformationRectangle,
  MenuCircleHorizontal,
  Money,
} from "react-huge-icons/solid";

const Activity = ({ name, amount, status, callback, id }) => {
  return (
    <>
      <div className="flex bg-gray-100 rounded-lg justify-between items-center px-10 max-sm:px-5 mt-2 py-2">
        <Money className="text-2xl text-amber-500" />{" "}
        <div className="flex justify-center items-center flex-col gap-1">
          <p className="text-xs">{name}</p>
          <h1 className="text-xs font-thin">${amount}</h1>
        </div>
        <div className="relative flex-col flex">
          <div className="flex flex-col gap-1">
            {status ? (
              <CheckCircle className="text-green-500 text-2xl" />
            ) : (
              <InformationRectangle className="text-amber-500 text-2xl" />
            )}
          </div>
          <MenuCircleHorizontal
            className="inline text-2xl text-gray-400"
            onClick={() => callback(id)}
          />
        </div>
      </div>
    </>
  );
};

export default Activity;
