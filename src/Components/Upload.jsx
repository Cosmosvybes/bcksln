import { useState } from "react";
import { ArrowRight } from "react-huge-icons/outline";
import { ImageUpload, Link } from "react-huge-icons/solid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input, Spinner } from "reactstrap";
import { userToken } from "./Constants/Contants";

const Upload = () => {
  const [images, setImage] = useState([]);
  const [serverImages, setServerImages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const id = localStorage.getItem("card_id");
    const formData = new FormData();
    for (let i = 0; i < serverImages.length; i++) {
      formData.append("photos", serverImages[i]);
    }
    formData.append("id", id);
    fetch(`https://bck-server.onrender.com/api/upload/cards/${userToken}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    })
      .then((result) => {
        if (!result.ok) throw new Error("Operation failed, try again");
        return result.json();
      })
      .then((response) => {
        toast.success(response.response);
        setLoading(false);
        if (response.response) {
          navigate("/checking-card");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
    console.log(formData.getAll("photos"));
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col px-4  mt-10">
        <Input
          type="file"
          multiple="multiple"
          className="hidden"
          id="uploadfile"
          onChange={handleUpload}
        />
        <h1 className="text-4xl max-sm:text-2xl text-center font-thin max-sm:text-center  text-gray-400 ">
          UPLOAD CARD PHOTOS
        </h1>
        <p className="font-extrabold text-gray-400 max-sm:font-thin max-sm:text-xs">
          {" "}
          SELECT ALL IMAGE FILES (front and back)
        </p>
        <div className="w-full text-center  mt-2  py-2 px-2 rounded-lg grid grid-cols-2 max-sm:grid-cols-2 gap-2">
          {images.map((img) => (
            <div className="relative rounded-md" key={img}>
              <img
                src={img}
                alt="image-uploaded"
                className=" max-sm:w-24 max-sm:h-24 w-32 h-32 object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="relative h-96 w-96 max-sm:w-full max-sm:h-52 max-md:w-full text-center flex justify-center items-center border-3 border-dashed  rounded-md px-2 py-2  ">
          <label htmlFor="uploadfile">
            <ImageUpload className="text-gray-500 text-8xl max-sm:text-4xl" />{" "}
          </label>
        </div>

        {images && (
          <div className="relative flex justify-center items-center mt-1">
            {loading ? (
              <Spinner type="border" />
            ) : (
              <button
                onClick={serverImagesUpload}
                // to={images.length != 0 && `/${to}`}
                className="bg-gray-600 hover:bg-gray-400 rounded-lg py-2 px-3 text-center flex justify-center items-center text-white w-64 font-semibold mt-4 max-sm:w-full "
              >
                LINK CARD NOW
                <Link className="inline text-xl" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Upload;
