import React, { useRef, useState } from "react";
import heart from "../assets/icon_heart.webp";
import {
  ArrowRight,
  CameraOnePieceSwitch,
  Image,
  ImageAdd,
  ImageUpload,
  NextArrow,
  PowerCircle,
  Quiz,
  RemoveRectangle,
  UserAdd,
} from "react-huge-icons/outline";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import { ImageDownload } from "react-huge-icons/solid";
const Verifiy = () => {
  const webcameRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [switchBtn, setSwitchBtn] = useState(true);
  const handleUpload = () => {
    const imageUrl = webcameRef.current.getScreenshot();
    const formData = new FormData();
    formData.append("image", imageUrl);
    setPreview(imageUrl);
    setQuestion(false);
  };
  const [showWebCam, setShow] = useState(true);
  const [question, setQuestion] = useState(false);
  const handleSwitch = () => {
    setShow(!showWebCam);
    setQuestion(true);
  };
  const [imageFilePreview, setImageFilePreview] = useState(null);
  const [imageToServer, setServerImage] = useState(null);
  const handleUploadPreview = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    setImageFilePreview(imageUrl);
    setServerImage(imageFile);
  };

  const handleProceed = () => {
    if (!preview || !imageToServer) return;
    let identity = document.querySelector("#identity");
    let identityType = identity.options[identity.selectedIndex].value;
    let objectData = { identityType, imageToServer, preview };
    console.log(objectData, preview);
    setSwitchBtn(false);
  };

  return (
    <>
      {showWebCam ? (
        <div className="relative flex justify-start items-center h-screen flex-col bg-gray-100 px-44 max-sm:px-0">
          <img src={heart} alt="heart" className="w-30 h-30 object-cover" />
          <RemoveRectangle
            className="text-5xl z-20 max-sm:text-3xl absolute right-20 max-sm:right-6 text-gray-500 top-4"
            onClick={() => history.back()}
          />
          <h1 className="text-Black font-extrabold text-7xl max-md:text-3xl max-sm:text-2xl ">
            Identity Verification
          </h1>
          <div className="flex h-auto w-full flex-col py-2  bg-gray-200 rounded-md border justify-center items-center px-2 ">
            <div className="flex justify-center items-center mb-2">
              <p className="mr-2 font-bold">Select proof of identity</p>
              <select
                id="identity"
                className="w-36 border-gray-300 outline-gray-300 rounded-lg px-2 bg-gray-200 py-1"
              >
                <option>Driving License</option>
                <option>Utility bill</option>
                <option>Govt ID</option>
              </select>
            </div>

            <div className="flex justify-center border border-gray-300 items-center w-96 max-sm:w-full h-12 bg-gray-50 rounded-lg mt-2  ">
              <input
                type="file"
                id="uploadId"
                className="hidden"
                onChange={handleUploadPreview}
              />
              <label htmlFor="uploadId">
                <ImageDownload className="text-gray-400 text-2xl" />
              </label>{" "}
              <p className="ml-2 ">Upload document</p>
            </div>
            <div className="flex justify-center border border-gray-300 items-center w-96 max-sm:w-full h-12 bg-gray-50 rounded-lg mt-4">
              <CameraOnePieceSwitch
                className="text-gray-400 text-3xl"
                onClick={handleSwitch}
              />
              <p className="ml-2 ">Take selfie</p>
            </div>
           
          </div>
          <div className="flex justify-start gap-1">
            {imageFilePreview && (
              <div className="flex w-20 h-20 mt-2">
                <img
                  src={imageFilePreview}
                  alt="preview"
                  className="object-cover rounded-full"
                />
              </div>
            )}
            {preview && (
              <div className="flex w-20 h-20 mt-2">
                <img
                  src={preview}
                  alt="preview"
                  className="object-cover rounded-full"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
              {switchBtn ? (
                <button
                  className="bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-800"
                  onClick={handleProceed}
                >
                  Submit details
                </button>
              ) : (
                <Link
                  to={"/dashboard"}
                  className="bg-black rounded-lg px-4 py-2 text-white duration-300 transition-opacity hover:bg-gray-800"
                >
                  Continue <ArrowRight className="inline text-2xl" />
                </Link>
              )}
            </div>
        </div>
      ) : (
        <div className="flex h-screen justify-start mt-10 items-center px-5 flex-col relative">
          <RemoveRectangle
            className="text-2xl z-20 absolute right-20 max-sm:right-6 text-gray-500 top-4"
            onClick={handleSwitch}
          />
          {!question && (
            <div className="flex border z-10 flex-col py-2 justify-around items-center border-black h-32 w-56 px-2 bg-gray-50 rounded-lg mb-2 absolute top-52 max-sm:top-80 max-lg:top-96">
              <Quiz className="text-3xl text-amber-500" />
              <div className="flex justify-around items-center gap-2">
                <button
                  className="bg-amber-600 text-white px-2 py-1 rounded-lg"
                  onClick={() => setQuestion(!question)}
                >
                  Retake
                </button>
                <button
                  className="bg-black text-white px-2 py-1 rounded-lg"
                  onClick={handleSwitch}
                >
                  proceed <ArrowRight className="inline text-2xl text-white" />
                </button>
              </div>
            </div>
          )}
          <Webcam
            className="rounded-lg"
            imageSmoothing={true}
            ref={webcameRef}
            screenshotFormat="image/jpeg"
          />
          <button
            className="text-white bg-black rounded-md px-3 py-2 mt-2"
            onClick={handleUpload}
          >
            Take picture <CameraOnePieceSwitch className="inline text-xl" />
          </button>
          {preview && (
            <div className="flex w-20 h-20 mt-2">
              <img
                src={preview}
                alt="preview"
                className="object-cover rounded-full"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Verifiy;
