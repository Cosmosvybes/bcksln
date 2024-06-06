import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MailArrowLeft } from "react-huge-icons/outline";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TwoFactor = () => {
  let navigate = useNavigate();
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = () => {
    fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ userCode: code }),
    })
      .then((result) => {
        if (!result.ok) throw new Error("Operation failed");
        return result.json();
      })
      .then((response) => {
        if (response.isAUthenticated && response.user.isVerified) {
          document.cookie =
            "Two_Fa=; expires=Thu, 01 Oct 1970 00:00; path=/api/";
          navigate("/dashboard");
          if (!response.user.isVerified) {
            navigate("/welcome");
          }
        } else {
          toast.error(response.response);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    const cleareResponse = () => {
      setTimeout(() => {
        setResponse("");
      }, 3000);
    };
    cleareResponse();
  }, [response]);
  return (
    <>
      <section className="h-screen max-sm:h-auto py-2 bg-gray-100 px-10 max-sm:px-2  relative ">
        <div className="flex ml-2 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>

        <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-2">
          2FA Authentication
        </h1>
        <div className="flex bg-gray-50 h-96   mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
          <MailArrowLeft className="text-7xl max-sm:text-6xl" />
          <h1 className="text-4xl max-sm:text-2xl mb-1 ">
            {" "}
            Two-Authentication code
          </h1>
          <p className="text-red-500  max-sm:w-full text-center px-2 ">
            {response}
          </p>
          <input
            type="phone"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            placeholder="Enter the 6 digit code"
            className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          <button
            onClick={handleSubmit}
            className="bg-black rounded-lg py-3 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900"
          >
            PROCEED <ArrowRight className="text-2xl text-white inline" />
          </button>
        </div>
      </section>
    </>
  );
};

export default TwoFactor;
