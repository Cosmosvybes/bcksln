import React, { useEffect, useRef, useState } from "react";
import heart from "../../assets/icon_heart.webp";
import {
  ArrowRight,
  CameraOnePieceSwitch,
  Quiz,
  RemoveRectangle,
} from "react-huge-icons/outline";
import Webcam from "react-webcam";
import { Link, useNavigate } from "react-router-dom";
import { ImageDownload } from "react-huge-icons/solid";
import { toast } from "react-toastify";
import { Input, Spinner } from "reactstrap";

let userToken = localStorage.getItem("userToken");

const Verifiy = () => {
  const [ssn, setSsn] = useState("");
  const webcameRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
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
  const [isLoading, setIsLoading] = useState(false);
  const handleUploadPreview = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    setImageFilePreview(imageUrl);
    setServerImage(imageFile);
  };

  const handleProceed = () => {
    setIsLoading(true);
    if (!ssn) {
      toast.warn("SSN is missing");
      setIsLoading(false);
      return;
    } else if (!preview || !imageToServer) {
      toast.warn("upload your verification identity");
      setIsLoading(false);
      return;
    }

    let identity = document.querySelector("#identity");
    let identityType = identity.options[identity.selectedIndex].value;
    const formData = new FormData();
    formData.append("image", imageToServer);
    formData.append("image", preview);
    formData.append("identityType", identityType);
    formData.append("ssn", ssn);

    fetch(`https://bck-server.onrender.com/api/identity/upload/${userToken}`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Operation failed, internal error");
        }
        return result.json();
      })
      .then((response) => {
        setIsLoading(false);
        if (response.responseId) {
          toast.success(response.response);
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.message);
        console.log(err);
      });
  };
  return (
    <>
      {showWebCam ? (
        <div className="relative flex justify-start items-center h-screen max-sm:h-screen flex-col  bg-gray-100 px-44 max-sm:px-2">
          <img src={heart} alt="heart" className="w-30 h-30 object-contain" />
          <RemoveRectangle
            className="text-5xl z-20 max-sm:text-3xl absolute right-20 max-sm:right-6 text-gray-500 top-4"
            onClick={() => history.back()}
          />

          <h1 className="text-Black font-semibold mb-2 text-5xl max-md:text-3xl max-sm:text-2xl ">
            Identity Verification
          </h1>

          <div className="flex h-auto w-full flex-col py-2  bg-gray-50 rounded-md  justify-center items-center px-2 ">
            <div className="flex justify-center items-center mb-2">
              <p className="mr-2 ">Select identity type</p>
              <select
                id="identity"
                className="w-36 border-gray-300 outline-gray-300 rounded-lg px-2 bg-gray-200 py-1"
              >
                <option>Driving License</option>
                <option>Utility bill</option>
                <option>Govt ID</option>
              </select>
            </div>
         
            <Input
              type="text"
              name="ssn"
              className="py-2 w-96 bg-gray-50 max-sm:w-full text-center"
              placeholder="SSN"
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
            />

            <div className="flex justify-center border border-gray-300 items-center w-96 max-sm:w-full h-12 bg-gray-50 rounded-lg mt-2  ">
              <form encType="multipart/form-data" method="POST">
                <Input
                  type="file"
                  id="uploadId"
                  name="image"
                  className="hidden"
                  onChange={handleUploadPreview}
                />
                <label htmlFor="uploadId">
                  <ImageDownload className="text-gray-400 text-2xl inline" />
                </label>{" "}
                <p className="ml-2 inline ">Upload document</p>
              </form>
            </div>
            <div className="flex justify-center border border-gray-300 items-center w-96 max-sm:w-full h-12 bg-gray-50 rounded-lg mt-4">
              <CameraOnePieceSwitch
                className="text-gray-400 text-3xl"
                onClick={handleSwitch}
              />
              <p className="ml-2 ">Take selfie</p>
            </div>
            <div className="flex justify-start gap-1">
              {imageFilePreview && (
                <div className="flex w-10 h-10 mt-2">
                  <img
                    src={imageFilePreview}
                    alt="preview"
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              {preview && (
                <div className="flex w-10 h-10 mt-2">
                  <img
                    src={preview}
                    alt="preview"
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {isLoading ? (
              <Spinner type="border" />
            ) : (
              <button
                className="bg-black rounded-lg px-4 py-3 w-96 max-sm:w-full text-center text-white hover:bg-gray-800"
                onClick={handleProceed}
              >
                Upload document now
              </button>
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
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Verifiy;
