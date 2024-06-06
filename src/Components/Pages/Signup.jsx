import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../../assets/signin.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Terms from "../Terms";
import { toast } from "react-toastify";
const Signin = () => {
  const [showTerms, setShowTerms] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirm] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [response, setResponse] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSwitch = () => {
    setShowTerms(!showTerms);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const regex = /^([0-9]{3})[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;
    const isValidPhone = regex.test(phone);
    const passwordMatch = password == comfirmPassword;
    setIsLoading(true);
    if (!firstname || !lastname || !email) {
      setResponse("Complete your details");
      scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (!phone) {
        setIsSuccess(false);
        setResponse("Enter your Phone");
        scrollTo({ top: 0, behavior: "smooth" });
      } else if (!isValidPhone) {
        setIsSuccess(false);
        setResponse("Enter a valid USA mobile number !");
        scrollTo({ top: 0, behavior: "smooth" });
      } else if (!password) {
        setIsSuccess(false);
        setResponse("Enter your Password");
        scrollTo({ top: 0, behavior: "smooth" });
      } else if (!passwordMatch) {
        setIsSuccess(false);
        setResponse("Passwords doesn't match");
        scrollTo({ top: 0, behavior: "smooth" });
      } else {
        if (agreement) {
          const userData = {
            firstname,
            lastname,
            email,
            phone,
            password,
          };
          fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(userData),
          })
            .then((result) => {
              if (!result.ok) throw new Error("Operation failed");
              return result.json();
            })
            .then((response) => {
              if (response.response) {
                toast.success(response.response);
                location.href = "/two-factor/authentication";
              }
            })
            .catch((err) => {
              // console.log(err.message);
              toast.error(err.message);
            });
        } else {
          setIsSuccess(false);
          setResponse("Check the agreement button , then proceed");
          scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth", left: 0 });
    const clearResponse = () => {
      setTimeout(() => {
        setResponse("");
        setIsLoading(false);
      }, 5000);
    };
    clearResponse();
  }, [response]);
  return (
    <>
      {!showTerms ? (
        <div className="relative py-10 max-md:py-0 max-sm:py-0 px-52 max-sm:px-0 h-auto bg-gray-100 ">
          {response && (
            <div className="flex w-full max-sm:w-full border px-4 py-4 bg-transparent  top-72 z-20 max-sm:top-56  max-sm:left-0  max-md:left-0 max-lg:left-32 max-sm:absolute h-auto">
              <div className="flex bg-gray-50 w-full justify-center items-center h-42 rounded-md py-5 px-4">
                <p
                  className={`
                    ${isSuccess ? "bg-green-200" : " bg-amber-200"} py-4
                 ${
                   isSuccess ? "text-green-500" : "text-amber-500 text-xs"
                 } px-2 py-4 rounded-md`}
                >
                  {response}
                </p>
              </div>
            </div>
          )}
          <button
            className="flex justify-start ml-8  items-center py-2"
            onClick={() => history.back()}
          >
            <ArrowLeft className="text-2xl inline" /> back
          </button>
          <h1 className="text-Black font-semibold text-5xl max-sm:text-4xl ml-8 max-sm:ml-3 ">
            {" "}
            Join us
          </h1>
          <h3 className="text-gray-500 font-extralight text-3xl ml-8 max-sm:text-xs  max-sm:ml-3 mt-3">
            Sign up a new account
          </h3>
          <div className="flex justify-between gap-2 w-full max-lg:w-auto max-md:w-auto bg-gray-100 mt-2 rounded-md px-8  py-3 max-sm:px-2 max-md:flex-col-reverse max-sm:flex-col">
            <div className="relative block">
              <h1 className="text-black font-extralight text-sm ml-2 mb-2">
                Enter your details
              </h1>

              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Firstname</b>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter your firstname"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Lastname</b>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter your lastname"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Email</b>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Phone</b>
                <input
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="222-444-5555"
                  className="border  text-xl border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>

              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Password</b>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>
              <label className="mb-1 ml-2">
                <b className="text-gray-400 text-sm">Comfirm Password</b>
                <input
                  type="password"
                  value={comfirmPassword}
                  onChange={(e) => setComfirm(e.target.value)}
                  placeholder="Comfirm your password"
                  className="border border-gray-100 w-96 px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                />
              </label>

              <div className="flex justify-center gap-2 items-center max-sm:w-full w-96">
                <input
                  type="checkbox"
                  value={agreement}
                  onChange={(e) => setAgreement(e.currentTarget.checked)}
                />
                <p className="text-gray-400  text-xs mt-3">
                  By clicking on Proceed, you agree to our{" "}
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
              <div className="flex w-96 flex-col  max-sm:w-full max-sm:flex-col justify-start  ">
                <button
                  onClick={handleSignUp}
                  className=" rounded-lg border duration-300 transition mt-3 border-black bg-black w-full max-sm:w-full px-4 py-2  text-white hover:bg-gray-800 hover:text-white"
                >
                  {isLoading ? "Loading" : "Proceed"}
                  <ArrowRight className="inline text-white hover:text-white" />
                </button>
                <div className="flex justify-start w-full text-gray-500 gap-3 items-center mt-2">
                  <p>Already have an account ?</p>
                  <Link to={"/"} className="text-black   inline mr-2">
                    Sign in
                  </Link>
                </div>
              </div>
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
