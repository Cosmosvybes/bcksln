import { useState } from "react";
import { ArrowRight } from "react-huge-icons/outline";
import { ImageAdd } from "react-huge-icons/solid";
import { Link } from "react-router-dom";

const Upload = ({ side, to, stage }) => {
  const [image, setImage] = useState(null);
  const handleUpload = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col px-4 mt-4 ">
        <div className="w-52 h-44 mt-2 rounded-lg">
          {image && (
            <img
              src={image}
              alt="image-upload"
              className="w-full h-full object-contain  "
            />
          )}
        </div>


        <input
          type="file"
          className="hidden"
          id="uploadfile"
          onChange={handleUpload}
        />
        <label htmlFor="uploadfile" className="mt-2">
          <ImageAdd className="text-gray-500 text-8xl max-sm:text-4xl" />
        </label>
        <p className="font-extrabold text-gray-400 max-sm:font-thin max-sm:text-xs"> {side}</p>
        {image && (
          <Link
            to={`/${to}`}
            className="bg-black rounded-lg py-3 text-center text-white w-52 mt-4 max-sm:w-full hover:bg-gray-900"
          >
            {stage} <ArrowRight className="inline text-2xl" />
          </Link>
        )}
      </div>
    </>
  );
};

export default Upload;
