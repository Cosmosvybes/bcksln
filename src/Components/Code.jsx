import { useState } from "react";
import { PencilBook } from "react-huge-icons/solid";
import { ArrowLeft, ArrowRight } from "react-huge-icons/solid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "reactstrap";


const Code = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChangNewPassword = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.warn("Password doesn't match");
      return;
    }
    let user = localStorage.getItem("email");
    const result = await fetch("https://bck-server.onrender.com/api/new/password", {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ password, email: user }),
    });
    if (!result.ok) {
      let response = await result.json();
      toast.warning(response.response);
      return;
    }
    let response = await result.json();
    toast.success(response.response);
    navigate("/");
  };

  return (
    <>
      <section className="h-screen max-sm:h-auto py-2 bg-gray-100 px-10 max-sm:px-2">
        <div className="flex ml-2 justify-start  items-center">
          <button className="mt-4 ml-1" onClick={() => history.back()}>
            <ArrowLeft className="text-2xl inline " /> back
          </button>
        </div>
        <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-2">
          Reset Password
        </h1>
        <div className="flex bg-gray-50 h-96  mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4">
          <PencilBook className="text-7xl max-sm:text-6xl" />
          <h1 className="text-4xl max-sm:text-3xl mb-1"> New Password</h1>

          <Input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Comfirm Password"
            className="w-72 max-sm:w-full h-10 rounded-md border text-center bg-gray-100 outline-gray-300 px-2 border-gray-300 mt-3"
          />
          <button
            onClick={handleChangNewPassword}
            className="bg-black rounded-lg py-3 text-center text-white w-72 mt-4 max-sm:w-full hover:bg-gray-900"
          >
            CHANGE PASSWORD{" "}
            <ArrowRight className="text-2xl text-white inline" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Code;
