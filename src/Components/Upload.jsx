import { useState } from "react";
import { ArrowRight, FileUploadBent } from "react-huge-icons/outline";
import {
  CloudHalfMoon,
  ImageAdd,
  ImageUpload,
  UploadCircle,
  UploadRectangle,
} from "react-huge-icons/solid";
import { useNavigate } from "react-router-dom";

const Upload = ({ callback }) => {
  const [images, setImage] = useState([]);
  const [serverImages, setServerImages] = useState([]);
  const navigate = useNavigate();
  const handleUpload = (e) => {
    let imageFiles = e.target.files;
    let allImages = [];
    for (let i = 0; i < imageFiles.length; i++) {
      let imageUrl = URL.createObjectURL(imageFiles[i]);
      allImages.push(imageUrl);
    }
    setImage(allImages);
    setServerImages([...imageFiles]);
  };

  const serverImagesUpload = () => {
    const id = localStorage.getItem("card_id");
    const formData = new FormData();
    for (let i = 0; i < serverImages.length; i++) {
      formData.append("photos", serverImages[i]);
    }
    formData.append("id", id);
    fetch("/api/upload/cards", {
      method: "PATCH",
      body: formData,
    })
      .then((result) => {
        if (!result.ok) throw new Error("Operation failed");
        return result.json();
      })
      .then((response) => {
        console.log(response);
        // if (response) {
        //   // navigate("/checking-card");
        // }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col px-4 mt-4 ">
        <div className="w-auto h-auto mt-2 rounded-lg grid grid-cols-4 max-sm:grid-cols-3 gap-2">
          {images.map((img) => (
            <div className="relative" key={img}>
              <img
                src={img}
                alt="image-uploaded"
                className="w-20 h-2- object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        <input
          type="file"
          multiple="multiple"
          className="hidden"
          id="uploadfile"
          onChange={handleUpload}
        />
        <label htmlFor="uploadfile" className="mt-2">
          <ImageUpload className="text-gray-500 text-8xl max-sm:text-4xl" />
        </label>
        <p className="font-extrabold text-gray-400 max-sm:font-thin max-sm:text-xs">
          {" "}
          SELECT ALL IMAGE FILES (front and back)
        </p>
        {images && (
          <button
            onClick={serverImagesUpload}
            // to={images.length != 0 && `/${to}`}
            className="bg-black rounded-lg py-2 px-2 text-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
          >
            LINK CARD NOW
            <ArrowRight className="inline text-xl" />
          </button>
        )}
      </div>
    </>
  );
};

export default Upload;
