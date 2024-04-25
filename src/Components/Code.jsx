import { PencilBook } from "react-huge-icons/solid";
import { ArrowLeft, ArrowRight, MailArrowLeft } from "react-huge-icons/solid";

const Code = () => {
  return (
    <>
      {!true ? (
        <section className="h-screen bg-gray-100 px-10 max-sm:px-2">
          <div className="flex ml-2 justify-start  items-center">
            <button className="mt-4 ml-1" onClick={() => history.back()}>
              <ArrowLeft className="text-2xl inline " /> back
            </button>
          </div>

          <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-2">
            Verification code
          </h1>
          <div className="flex bg-gray-50 h-96   mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
            <MailArrowLeft className="text-7xl max-sm:text-6xl" />
            <h1 className="text-4xl max-sm:text-3xl mb-1"> Enter your code</h1>

            <input
              type="phone"
              placeholder="Enter the 6 digit code"
              className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
            />
            <button className="bg-black rounded-lg py-3 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900">
              VERIFY CODE <ArrowRight className="text-2xl text-white inline" />
            </button>
          </div>
        </section>
      ) : (
        <section className="h-screen bg-gray-100 px-10 max-sm:px-2">
          <div className="flex ml-2 justify-start  items-center">
            <button className="mt-4 ml-1" onClick={() => history.back()}>
              <ArrowLeft className="text-2xl inline " /> back
            </button>
          </div>
          <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-2">
            Reset Password
          </h1>
          <div className="flex bg-gray-50 h-96  mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
          <PencilBook className="text-7xl max-sm:text-6xl"/>
            <h1 className="text-4xl max-sm:text-3xl mb-1"> New Password</h1>

            <input
              type="text"
              placeholder="New password"
              className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
            />
            <input
              type="text"
              placeholder="Comfirm Password"
              className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
            />
            <button className="bg-black rounded-lg py-3 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900">
              CHANGE PASSWORD{" "}
              <ArrowRight className="text-2xl text-white inline" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Code;
