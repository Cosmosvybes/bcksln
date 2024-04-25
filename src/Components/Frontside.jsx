import { ArrowLeft} from "react-huge-icons/solid";
import Upload from "./Upload";

const Frontside = () => {
  return (
    <>
      <section className="h-screen relative bg-gray-100 px-10 max-sm:px-4 ">
        <div className="relative bg-gray-100">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>
        <h1 className="text-8xl max-sm:text-2xl font-thin max-sm:text-center mt-2 text-gray-400 ">
          UPLOAD CARD FRONTSIDE
        </h1>
        <div
          className="flex h-auto py-3 justify-center items-center bg-gray-50
        "
        >
          <Upload side={"Upload Card front"} to={"backside"} stage={"NEXT"} />
        </div>
      </section>
    </>
  );
};

export default Frontside;
