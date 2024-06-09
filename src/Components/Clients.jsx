import { toast } from "react-toastify";
import User from "./User";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateApproval } from "../brain/Users";
import { Spinner } from "reactstrap";

const Clients = ({ allUsers, loading }) => {
  // let [users, setUsers] = useState(allUsers ? allUsers : []);
  console.log(allUsers);
  const dispatch = useDispatch();

  const handleApprov = async (id) => {
    dispatch(updateApproval({ id: id }));
  };

  // const handleReject = async (id) => {
  //   setLoading(true);
  //   let response = await fetch(`http://localhost:8080/api/approve/user/${id}`, {
  //     method: "PATCH",
  //     credentials: "include",
  //   });
  //   if (!response.ok) {
  //     toast.warning(response.response);
  //     setLoading(false);
  //   } else {
  //     let okayResponse = await response.json();
  //     toast.success(okayResponse.response);
  //     setLoading(false);
  //   }
  //   // console.log(users);
  // };

  return (
    <>
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        {loading ? (
          <Spinner type="border" />
        ) : (
          <div className="grid grid-cols-2 gap-2  max-sm:grid-cols-1  py-2 px-2  bg-gray-50 h-auto">
            {allUsers.map((data, i) => (
              <div className="relative" key={i}>
                <User
                  firstname={data.user.firstname}
                  lastname={data.user.lastname}
                  IDType={data.identityType}
                  isVerified={data.isVerified}
                  email={data.email}
                  photo={data.photos}
                  // idn={data.photos[0]}
                  // user={data.photos[1]}
                  id={data._id}
                  // reject={handleReject}
                  approve={handleApprov}
                  // loading={loading}
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
