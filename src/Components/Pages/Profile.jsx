import { useEffect, useState } from "react";
import {
  Mobile,
  Mail,
  User,
  Location,
  CardAdd,
  Headphones,
  ArrowRight,
  Copy,
  DocumentText,
  Edit,
  Earnings,
} from "react-huge-icons/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getUser, updateAddress } from "../../brain/user";
import { toast } from "react-toastify";
import BreadCrumbs from "../BreadCrumbs";
import { UserCircleBlock } from "react-huge-icons/outline";

const Profile = ({ closePage, showMenu, user }) => {
  const [edit, setEdit] = useState(true);
  // const { user } = useSelector((state) => state.userSlice);
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleAddress = async (e) => {
    e.preventDefault();
    const addressObject = { address, postal, state_: state };
    dispatch(updateAddress(addressObject));
    setEdit(true);
    const response = await fetch(
      `https://bck-server.onrender.com/api/update/address/${localStorage.getItem(
        "userToken"
      )}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ address: addressObject }),
        credentials: "include",
      }
    );
    if (!response.ok) {
      toast.error(response.response);
      return;
    }
    const responseData = await response.json();
    toast.success(responseData.response);
    console.log(JSON.stringify({ address: addressObject }));
  };

  return (
    <>
      <BreadCrumbs
        parent={"Profile"}
        icon={<UserCircleBlock />}
        callback={closePage}
      />
      <div className="relative    h-screen bg-gray-100  px-8 max-sm:px-0">
        <h1 className="text-Black font-semibold text-5xl mt-4 text-gray-400 max-sm:ml-2 max-sm:text-xl  max-sm:">
          {" "}
          User Info
        </h1>
        <div className="grid grid-cols-3 gap-3 px-2 py-2 max-sm:grid-cols-1 h-auto bg-gray-50 rounded-md mt-2">
          <div className="flex justify-start py-2 flex-col">
            <div className="flex justify-start ">
              <User className="inline text-2xl text-amber-500" />
              <strong className="text-gray-400">FULL NAME</strong>
            </div>
            <p className="font-thin ml-2 text-gray-500">
              {user?.firstname?.toUpperCase()} {user?.lastname}
            </p>
          </div>
          <div className="flex justify-start py-2  flex-col">
            <div className="flex justify-start ">
              <Mobile className="inline text-2xl text-amber-500" />
              <strong className="text-gray-400">PHONE</strong>
            </div>
            <p className="font-thin ml-2 text-gray-500">{user?.phone}</p>
          </div>
          <div className="flex justify-start py-2  flex-col">
            <div className="flex justify-start ">
              <Mail className="inline text-2xl text-amber-500 mr-1" />
              <strong className="text-gray-400 ">EMAIL</strong>
            </div>
            <p className="font-thin ml-2 text-gray-500">{user?.email}</p>
          </div>
          <div className="flex justify-start py-2  flex-col">
            <div className="flex justify-start ">
              <Location className="inline text-2xl text-amber-500" />
              <strong className="text-gray-400">ADDRESS</strong>
            </div>
            {edit ? (
              <div className="flex justify-start items-center">
                <p className="font-thin ml-2 text-gray-500">
                  {user?.address
                    ? ` ${user?.address.address} ${user?.address.postal} ${user?.address.state_}`
                    : "No user address yet "}
                </p>{" "}
                <Edit onClick={() => setEdit(false)} />
              </div>
            ) : (
              <div className="flex justify-start gap-2 w-full flex-col">
                {" "}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter new address "
                  className=" bg-gray-100 border py-2  border-gray-50 px-2 mt-1 outline-gray-200 rounded-md "
                />
                <input
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  placeholder="Postal"
                  className=" bg-gray-100 border py-2  border-gray-50 px-2 mt-1 outline-gray-200 rounded-md "
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className=" bg-gray-100 border py-2  border-gray-50 px-2 mt-1 outline-gray-200 rounded-md "
                />
                <button className="text-amber-500" onClick={handleAddress}>
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-Black font-semibold text-5xl max-sm:ml-2 text-gray-400 max-sm:text-2xl mt-2 max-sm:">
          {" "}
          Others
        </h1>

        <div className="grid grid-cols-2 gap-3 px-2 py-2 max-sm:grid-cols-1 h-auto bg-gray-50 rounded-md mt-2">
          <div className="flex justify-start py-2 flex-col">
            <div className="flex justify-start ">
              <CardAdd className="inline text-2xl text-amber-500 mr-1" />
              <strong className="text-gray-400">ACCOUNT CARD</strong>
            </div>
            {false ? (
              <p className="font-thin ml-2 text-gray-500">..5678</p>
            ) : (
              <p className="ml-2 text-gray-600">No card linked yet</p>
            )}
          </div>

          <div className="flex justify-start py-2  items-center">
            <Link
              to={"/dashboard"}
              className="flex justify-start items-center "
            >
              <DocumentText className="inline text-2xl text-amber-500 mr-1" />
              <strong className="text-gray-400">LOAN HISTORY</strong>
              <ArrowRight className="inline" />
            </Link>
          </div>
          <div className="flex justify-start py-2  flex-col">
            <div className="flex justify-start ">
              <Headphones className="inline text-2xl text-amber-500 mr-1" />
              <strong className="text-gray-400">CUSTOMER SRVICE CENTER</strong>
            </div>
            <p className="font-thin ml-2 text-gray-500">
              <Mobile className="inline text-gray-500 text-sm mr-1" />
              631-731-2415
            </p>
            <p className="font-thin ml-2 text-gray-500 ">
              <Mail className="inline text-gray-500 mr-1" />
              support.bucksloan@gmail.com
            </p>
          </div>
          <div className="flex justify-start py-2  flex-col">
            <div className="flex justify-start ">
              <Earnings className="inline text-2xl text-amber-500 mr-1" />
              <strong className="text-gray-400">REFER AND EARN</strong>
            </div>
            <p className="font-thin ml-2 text-gray-500">
              Share your Invitation ID
            </p>
            <div className="flex items-center justify-start gap-2">
              <p className="text-gray-600 ml-2">1234578</p>{" "}
              <Copy className="inline text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
