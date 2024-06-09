import { useState } from "react";
import { ArrowRight } from "react-huge-icons/outline";
import { ImageUpload } from "react-huge-icons/solid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input, Spinner } from "reactstrap";

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
    fetch("https://bck-server.onrender.com0/api/upload/cards", {
      method: "PATCH",
      credentials: "include",
      body: formData,
    })
      .then((result) => {
        if (!result.ok) throw new Error("Operation failed");
        return result.json();
      })
      .then((response) => {
        toast.success(response.response);
        setLoading(false);
        // if (response) {
        //   // navigate("/checking-card");
        // }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        console.log(err.message);
      });
    console.log(formData.getAll("photos"));
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col px-4 mt-4 ">
        <Input
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

        <div className="w-auto h-auto mt-2 border py-2 px-2 rounded-lg grid grid-cols-2 max-sm:grid-cols-2 gap-2">
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
        {images && (
          <div className="relative flex justify-center items-center mt-1">
            {loading ? (
              <Spinner type="border" />
            ) : (
              <button
                onClick={serverImagesUpload}
                // to={images.length != 0 && `/${to}`}
                className="bg-black rounded-lg py-2 px-3 text-center flex justify-center items-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
              >
                LINK CARD NOW
                <ArrowRight className="inline text-xl" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Upload;
