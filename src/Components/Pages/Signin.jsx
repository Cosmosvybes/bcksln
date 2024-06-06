import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../../assets/signin.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((result) => {
        if (!result.ok) throw new Error("Sign in failed");
        return result.json();
      })
      .then((response) => {
        setIsLoading(false);
        console.log(response);
        if (response.userToken) {
          location.href = "/two-factor/authentication";
        } else {
          setIsLoading(false);
          toast.success(response.response);
          // setResponse(response.response);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // console.log({ email, password });
  };
  // useEffect(() => {
  //   const clearResponse = () => {
  //     setTimeout(() => {
  //       setResponse("");
  //     }, 5000);
  //   };
  //   clearResponse();
  // }, [response]);

  return (
    <>
      <div className="relative py-10 max-md:py-0 max-sm:py-2 px-52 max-sm:px-0 max-md:px-5 flex justify-center flex-col  h-screen bg-gray-100 ">
        <h1 className="text-Black font-semibold text-5xl max-sm:ml-2 ml-7 max-sm:text-4xl">
          {" "}
          Welcome back
        </h1>
        <h3 className="text-gray-500 font-extralight text-3xl max-sm:ml-3  ml-8 max-sm:text-2xl  mt-3">
          Sign in to continue
        </h3>
        <div className="flex justify-between w-full bg-gray-100 mt-2 rounded-md px-8 py-3 max-sm:px-2 max-sm:flex-col">
          <div className="relative block">
            <h1 className="text-black font-extralight text-sm ml-2 mb-2">
              Enter your login details
            </h1>
            <p className="text-red-500 ml-2">{response}</p>
            <label className="mb-1">
              <b className="text-gray-400 ml-2 text-sm">Email</b>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
              />
            </label>
            <label className="mb-1 ml-2 text-sm">
              <b className="text-gray-400">Password</b>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
              />
            </label>
            <div className="flex w-96 max-sm:w-full justify-between items-center px-1">
              <Link
                to={"/forgot-password"}
                className="text-black text-sm  underline block mt-1"
              >
                {" "}
                Forgot password ?
              </Link>
              <button
                onClick={handleSignIn}
                className=" rounded-lg border duration-300 transition border-black bg-black w-44 max-sm:w-32 px-4 py-2  mt-2 text-white hover:bg-gray-800 hover:text-white"
              >
                {isLoading ? "Loading" : "Proceed"}
                <ArrowRight className="inline text-white hover:text-white" />
              </button>
            </div>
            <div className="flex justify-between px-1">
              <Link
                to={"/register"}
                className="text-black text-sm  underline block mt-1"
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
