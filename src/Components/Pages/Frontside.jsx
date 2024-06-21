
import Upload from "../Upload";
import BreadCrumbs from "../BreadCrumbs";
import { CardArrowLeft } from "react-huge-icons/outline";

const Frontside = () => {
  return (
    <>
      <BreadCrumbs parent={"card-upload"} icon={<CardArrowLeft />} />
      <section className="h-screen relative flex justify-start max-sm:justify-start items-center flex-col bg-gray-50 px-10 max-sm:px-0">
        <div
          className="flex h-auto  justify-center items-center bg-gray-50">
          <Upload
            side={"Upload Card front"}
            to={"checking-card"}
            stage={"UPLOAD PHOTO"}
          />
        </div>
      </section>
    </>
  );
};

export default Frontside;
