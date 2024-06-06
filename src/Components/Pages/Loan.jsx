
import { Link } from "react-router-dom";

const Loan = ({ name, percentage, amount }) => {
  return (
    <div className="bg-gray-100 relative block rounded-lg px-1 py-2 hover:bg-slate-100">
      <div className="flex justify-start flex-col ">
        <h1 className="text-2xl font-extrabold max-sm:text-xl max-sm:font-thin">
          {name}
        </h1>
        <p className="text-gray-700 font-thin text-xs">
          Interest as low as {percentage} %{" "}
        </p>
      </div>
      <div className="flex justify-start items-center mt-3 gap-2">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-xl font-bold text-amber-600">${amount}</h1>
          <p className="text-gray-700 font-thin text-xs">Max. amount</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-xs font-bold text-amber-600">%{percentage}</h1>
          <p className="text-gray-700 font-thin text-xs">Interest</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to={"/application"}
          className="bg-black rounded-sm  text-center w-16 text-white mt-2"
        >
          {" "}
          apply{" "}
        </Link>
      </div>
    </div>
  );
};

export default Loan;
