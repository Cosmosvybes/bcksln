import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MailArrowLeft } from "react-huge-icons/outline";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const TwoFactor = () => {
  let navigate = useNavigate();
  const [code, setCode] = useState("");
  let [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    fetch("https://bck-server.onrender.com/api/verify", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ userCode: code }),
    })
      .then((result) => {
        setLoading(true);
        if (!result.ok) throw new Error("Operation failed");
        return result.json();
      })
      .then((response) => {
        setLoading(false);
        if (response.isAUthenticated && response.user.isVerified) {
          document.cookie =
            "Two_Fa=; expires=Thu, 01 Oct 1970 00:00; path=/api/";
          navigate("/dashboard");
          if (!response.user.isVerified) {
            navigate("/welcome");
          }
        } else {
          toast.warning(response.response);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
    console.log(loading);
  };

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

          <input
            type="phone"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            placeholder="Enter the 6 digit code"
            className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          {loading ? (
            <div className="relative flex justify-end w-full max-sm:w-full items-center">
              <Spinner type="border" className="mt-1 text-end" />
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-black rounded-lg py-2 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900"
            >
              PROCEED <ArrowRight className="text-2xl text-white inline" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default TwoFactor;
