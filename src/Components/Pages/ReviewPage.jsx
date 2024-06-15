import { Security } from "react-huge-icons/outline";
import review from "../../assets/review.png";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin";
const ReviewPage = () => {
  let isLoggedIn = localStorage.getItem("userToken");
  let navigate = useNavigate();
  useLayoutEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <>
      {isLoggedIn ? (
        <div className="h-screen flex justify-start py-4 items-center flex-col bg-gray-100">
          <Security className="text-5xl text-amber-600 mb-1" />
          <h1 className="text-7xl max-md:text-4xl max-sm:text-2xl font-light">
            Document under review.
          </h1>
          <img src={review} alt="preview" />
          <p className="text-gray-500 max-md:text-2xl font-light text-4xl max-sm:text-xs">
            You will be notified shortly, thank you!
          </p>
        </div>
      ) : (
        <Signin />
      )}
    </>
  );
};

export default ReviewPage;
