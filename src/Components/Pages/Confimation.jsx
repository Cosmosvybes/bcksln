import { ArrowRight, BellNotification } from "react-huge-icons/solid";
import reviewPicture from "../../assets/signin.png";
import { Link } from "react-router-dom";
const Confimation = ({ title, message }) => {
  return (
    <>
      <section className="relative flex h-auto max-sm:h-screen  flex-col justify-start items-center bg-gray-100 px-10 max-sm:py-2   max-sm:px-4">
        <h1 className="text-8xl font-extrabold  max-sm:text-4xl mb-2 ml-2">
          Comfirmation
        </h1>
        <div className="bg-green-300 w-full px-2 py-2 flex justify-center flex-col items-center max-sm:flex-col rounded-md">
          <BellNotification className="text-2xl text-green-800" />
          <strong className=" text-green-800">{title}</strong>
          <p className="text-green-600 block max-sm:text-center">
            {message}
            {/* Dear customer, your loan application has been successfully submitted
            , for reviewed. You will be contacted shortly . */}
          </p>
        </div>
        <div className="flex justify-between flex-col items-center">
          <img src={reviewPicture} alt="image" />
          <Link
            className="bg-black rounded-lg py-3 text-center text-white w-52 max-sm:w-full hover:bg-gray-900"
            to={"/dashboard"}
          >
            Dashboard <ArrowRight className="inline text-2xl" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Confimation;
