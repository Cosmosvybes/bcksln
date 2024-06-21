import { ArrowLeft } from "react-huge-icons/solid";


const BreadCrumbs = ({ parent, icon, callback }) => {
  return (
    <div className="hidden max-sm:flex max-md:flex  justify-between px-2 max-sm:px-1   h-20 max-sm:h-16 py-3 bg-gray-100  gap-2 items-center max-sm:w-full">
      <button
        className=" text-xl max-sm:text-2xl z-30  text-gray-400  max-sm:mt-0 cursor-pointer"
        onClick={callback ? callback : history.back()}
      >
        <ArrowLeft className="text-xl inline " /> back
      </button>

      <div className="relative flex justify-end gap-1 text-gray-400 text-xl items-center">
        {icon}
        <p>{parent} </p>
      </div>
    </div>
  );
};

export default BreadCrumbs;
