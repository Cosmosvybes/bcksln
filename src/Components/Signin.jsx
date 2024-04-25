import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../assets/signin.png";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <>
      <div className="relative  h-screen bg-gray-100 ">
       
        <h1 className="text-Black font-extrabold text-8xl max-sm:ml-2 max-sm:text-4xl">
          {" "}
          Welcome back
        </h1>
        <h3 className="text-gray-500 font-extralight text-5xl max-sm:ml-2  ml-3 max-sm:text-2xl  mt-3">
          Sign in to continue
        </h3>
        <div className="flex justify-between w-full bg-gray-100 mt-2 rounded-md px-8 py-3 max-sm:px-2 max-sm:flex-col-reverse">
          <div className="relative block">
            <h1 className="text-black font-extralight text-2xl mb-2">
              Enter your login details
            </h1>
            <label className="mb-1">
              <b className="text-gray-400 ml-2">Email</b>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
              />
            </label>
            <label className="mb-1 ml-2">
              <b className="text-gray-400">Password</b>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
              />
            </label>
            <div className="flex w-96 max-sm:w-full justify-between items-center px-1">
              <Link
                to={"/forgot-password"}
                className="text-black  underline block mt-1"
              >
                {" "}
                Forgot password ?
              </Link>
              <button className=" rounded-lg border duration-300 transition border-black bg-black w-44 max-sm:w-32 px-4 py-2  mt-2 text-white hover:bg-gray-800 hover:text-white">
                Proceed
                <ArrowRight className="inline text-white hover:text-white" />
              </button>
            </div>
            <div className="flex justify-between px-1">
              <Link
                to={"/register"}
                className="text-black  underline block mt-1"
              >
                {" "}
                Create new account
              </Link>
            </div>
          </div>
          <img src={signin} alt="image" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Signin;
