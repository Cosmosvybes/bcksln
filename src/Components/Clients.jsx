import { useState } from "react";
import User from "./User";
import id from "../assets/activate.png";
import user from "../assets/Pia_486x440px_Auto Loan_keys.png";
import Admin from "./Admin";
const Clients = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Nicole",
      lastname: "colllins",
      email: "nicole@nicole.com",
      phone: 6317312514,
      isVerified: false,
      idn: id,
      user: user,
    },
    {
      id: 14,
      firstname: "Nicoleuse",
      lastname: "colllins",
      email: "nicole@nicole.com",
      phone: 6317312514,
      isVerified: false,
      idn: id,
      user: user,
    },
    {
      id: 13,
      firstname: "Rolland",
      lastname: "Jaru",
      email: "nicole-lionsuy@nicole.com",
      phone: 6317312514,
      isVerified: false,
      idn: id,
      user: user,
    },
    {
      id: 25,
      firstname: "Alex",
      lastname: "colllins",
      email: "nicole-netreon@nicole.com",
      phone: 6317312514,
      isVerified: false,
      idn: id,
      user: user,
    },
  ]);
  const handleApprov = (id) => {
    setUsers(
      users.map((user) =>
        user.id == id
          ? {
              ...user,
              isVerified: true,
            }
          : user
      )
    );
    console.log(users);
  };
  const handleReject = (id) => {
    setUsers(
      users.map((user) =>
        user.id == id
          ? {
              ...user,
              isVerified: false,
            }
          : user
      )
    );
  };

  return (
    <>
      <Admin />
      <section className="bg-gray-100 px-8 max-sm:px-2 ">
        <div className="grid grid-cols-3 gap-2  max-sm:grid-cols-1  py-2 px-2 bg-gray-50 h-auto">
          {users.map((user) => (
            <div className="relative" key={user.id}>
              <User
                firstname={user.firstname}
                lastname={user.lastname}
                isVerified={user.isVerified}
                email={user.email}
                idn={user.idn}
                user={user.user}
                id={user.id}
                reject={handleReject}
                approve={handleApprov}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
