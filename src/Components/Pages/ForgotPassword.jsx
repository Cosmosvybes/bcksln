import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import { MailNotification } from "react-huge-icons/solid";
import { Link } from "react-router-dom";

const ForgotPasswor = () => {
  return (
    <>
      <section className="h-screen max-sm:h-auto bg-gray-100 px-10 max-sm:px-2  relative ">
        <div className="flex ml-2 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>
        <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-2">
          Forgot Password
        </h1>
        <div className="flex bg-gray-50 h-96  mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
          <MailNotification className="text-5xl max-sm:text-6xl" />
          <h1 className="text-4xl max-sm:text-3xl mb-1">Mail Address Here</h1>
          <p className="max-sm:text-center max-sm:text-xs">
            Enter your email address for password recovery
          </p>
          <input
            type="text"
            placeholder="Email address"
            className="w-72 max-sm:w-full h-10 rounded-md border bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          <Link
            to={"/verify-code"}
            className="bg-black rounded-lg py-3 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900"
          >
            Next <ArrowRight className="text-2xl text-white inline" />
          </Link>
        </div>
        <div className="relative  block px-2 mt-2">
          <p className="block">To sign in to your account</p>
          <Link className="block  underline" to={"/"}>
            Click here{" "}
            <ArrowRight className="text-2xl text-black inline" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswor;
