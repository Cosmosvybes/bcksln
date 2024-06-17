import { ArrowRight, Tick } from "react-huge-icons/outline";
import heart from "../../assets/icon_heart.webp";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <div className="flex justify-start items-center h-screen max-sm:h-96 flex-col  relative ">
        <img src={heart} alt="heart" className="w-30 h-30 object-cover" />
        <h1 className="text-black font-bold  text-7xl max-sm:text-2xl  max-lg:text-xs">
          {" "}
          Welcome to Bucksloan!
        </h1>
        <div className="relative px-44 max-sm:px-4 h-66 w-full">
          <div className="block bg-gray-100 rounded-md h-full w-full mt-3 px-10 py-3 max-sm:px-5">
            <p className="text-gray-500">
              To begin using Bucksloan services, please
            </p>
            <h1 className="font-bold text-black mt-1">Verify Your identify</h1>
            <hr className="mt-3" />
            <ul className="h-auto list-disc px-10 max-sm:px-5 mt-2">
              <li>SSN</li>
              <li>Proof of Identity</li>
              <li>Upload Selfie</li>
            </ul>
            <div className="flex justify-center mt-4">
              <Link
                to={"/verify"}
                className="bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-800"
              >
                Verify Now <ArrowRight className="inline text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
