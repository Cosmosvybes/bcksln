import { toast } from "react-toastify";
import User from "./User";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateApproval } from "../brain/Users";
import { Spinner } from "reactstrap";

const Clients = () => {
  const { users, userLoading } = useSelector((state) => state.customers);
  useLayoutEffect(() => {
    dispatch(getUsers());
  }, []);
  const dispatch = useDispatch();

  const handleApprov = async (id) => {
    dispatch(updateApproval({ id: id }));
    let response = await fetch(
      `https://bck-server.onrender.com/api/approve/user/${id}`,
      {
        method: "PATCH",
        credentials: "include",
      }
    );
    if (!response.ok) {
      toast.warning(response.response);
      return;
    }
    let okayResponse = await response.json();
    toast.success(okayResponse.response);
  };

  const handleReject = async (id) => {
    dispatch(updateApproval({ id: id }));
    let response = await fetch(
      `https://bck-server.onrender.com/api/approve/user/${id}`,
      {
        method: "PATCH",
        credentials: "include",
      }
    );
    if (!response.ok) {
      toast.warning(response.response);
      return;
    }
    let okayResponse = await response.json();
    toast.success(okayResponse.response);
  };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {userLoading ? (
          <div className="relative h-screen flex justify-center items-center">
            <Spinner type="border" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
            {users.map((data, i) => (
              <div className="relative" key={i}>
                <User
                  firstname={data.user.firstname}
                  lastname={data.user.lastname}
                  IDType={data.identityType}
                  isVerified={data.isVerified}
                  email={data.email}
                  photo={data.photos}
                  id={data.email}
                  reject={handleReject}
                  approve={handleApprov}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Clients;
