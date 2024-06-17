import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import { MailNotification } from "react-huge-icons/solid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input, Spinner } from "reactstrap";

const ForgotPasswor = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordRecovery = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let response = await fetch(
      "https://bck-server.onrender.com/api/password-recovery",
      {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ email }),
      }
    );
    let data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      toast.response("Server error, try again");
      return;
    }
    if (data.response === "user not found") {
      setIsLoading(false);
      toast.warning(data.response);
    } else {
      toast.success(data.response);
      setIsLoading(false);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("email", data.data.email);
      navigate("/password/recovery/auth");
    }
  };

  return (
    <>
      <section className="h-screen max-sm:h-auto bg-gray-100 px-10 max-sm:px-2  relative ">
        <div className="flex ml-2 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>
        <h1 className="text-Black font-semibold text-5xl max-sm:ml-2 ml-6 mt-2 max-sm:text-4xl">
          Forgot Password
        </h1>
        <div className="flex bg-gray-50 h-96  mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
          <MailNotification className="text-5xl max-sm:text-6xl" />
          <h1 className="text-4xl max-sm:text-3xl mb-1">Email Address Here</h1>
          <p className="max-sm:text-center max-sm:text-xs">
            Enter your email address for password recovery
          </p>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-72 max-sm:w-full h-10 rounded-md border bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          <div className="relative mt-2 max-sm:w-full">
            {isLoading ? (
              <Spinner type="border" />
            ) : (
              <button
                onClick={handlePasswordRecovery}
                className="bg-black rounded-lg py-2 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900"
              >
                Next <ArrowRight className="text-2xl text-white inline" />
              </button>
            )}
          </div>
        </div>
        <div className="relative  block px-2 mt-2">
          <p className="block">To sign in to your account</p>
          <Link className="block  underline" to={"/"}>
            Click here <ArrowRight className="text-2xl text-black inline" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswor;
