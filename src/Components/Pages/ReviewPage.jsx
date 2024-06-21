import { Security } from "react-huge-icons/outline";
import review from "../../assets/review.png";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeAuth } from "../../brain/user";
import { toast } from "react-toastify";

const ReviewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("isAuthenticated");
    if (!localStorage.getItem("userToken")) navigate("/");
    dispatch(closeAuth());
    toast.success("account signed out");
  };

  return (
    <>
      <div className="h-screen flex justify-center py-2 items-center flex-col bg-gray-100">
        <Security className="text-5xl text-amber-600 mb-1" />
        <h1 className="text-7xl max-md:text-4xl max-sm:text-2xl font-light">
          Document under review.
        </h1>
        <img src={review} alt="preview" />
        <p className="text-gray-500 max-md:text-2xl font-light text-4xl max-sm:text-xs">
          You will be notified shortly, thank you!
        </p>
        <button
          onClick={handleLogout}
          className="font-semibold px-3 py-2 w-52 mt-1 max-sm:w-32 max-md:w-44 max-lg:w-48 bg-red-100 text-red-500 rounded-md"
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default ReviewPage;
