import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../assets/signin.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Terms from "./Terms";
const Signin = () => {
  const [showTerms, setShowTerms] = useState(true);

  const handleSwitch = () => {
    setShowTerms(!showTerms);
  };

  return (
    <>
      {!showTerms ? (
        <div className="relative  h-screen bg-gray-100 ">
          <div
            className="flex justify-start ml-4  items-center py-2"
            onClick={() => history.back()}
          >
            <ArrowLeft className="text-2xl" /> <p>back</p>
          </div>
          <h1 className="text-Black font-extrabold text-8xl max-sm:text-4xl ml-2 mt-3">
            {" "}
            Join us
          </h1>
          <h3 className="text-gray-500 font-extralight text-5xl ml-3 max-sm:text-2xl max-sm:ml-1 mt-3">
            Sign up a new account
          </h3>
          <div className="flex justify-between gap-2 w-full max-lg:w-auto max-md:w-auto bg-gray-100 mt-2 rounded-md px-8  py-3 max-sm:px-2 max-md:flex-col-reverse max-sm:flex-col-reverse">
            <div className="relative block">
              <h1 className="text-black font-extralight text-2xl ml-2 mb-2">
                Enter your details
              </h1>

              <label className="mb-1 ml-2">
                <b className="text-gray-400">Firstname</b>
                <input
                  type="text"
                  placeholder="Enter your firstname"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400">Lastname</b>
                <input
                  type="text"
                  placeholder="Enter your lastname"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400">Phone</b>
                <input
                  type="phone"
                  placeholder="222-444-5555"
                  className="border text-center text-xl border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400">Email</b>
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
              <label className="mb-1 ml-2">
                <b className="text-gray-400">Comfirm Password</b>
                <input
                  type="password"
                  placeholder="Comfirm your password"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <div className="flex w-96 max-sm:w-full justify-between items-center ">
                <Link
                  to={"/welcome"}
                  className="text-black  underline  mt-1 inline mr-2"
                >
                  {" "}
                  Alrady have an account ?
                </Link>
                <button className=" rounded-lg border duration-300 transition mt-3 border-black bg-black w-44 max-sm:w-32 px-4 py-2  text-white hover:bg-gray-800 hover:text-white">
                  Proceed
                  <ArrowRight className="inline text-white hover:text-white" />
                </button>
              </div>

              <p className="text-gray-400  text-xs mt-3">
                By clicking proceed, you agree to our{" "}
                <button
                  className="text-xs text-sky-900 inline"
                  onClick={() => setShowTerms(!showTerms)}
                >
                  {" "}
                  Terms of Service
                </button>{" "}
                .You are also elect to receive updates,newsletters and offers
                from buckloans.
              </p>
            </div>
            <img src={signin} alt="image" className="object-cover " />
          </div>
        </div>
      ) : (
        <Terms callback={handleSwitch} />
      )}
    </>
  );
};

export default Signin;
