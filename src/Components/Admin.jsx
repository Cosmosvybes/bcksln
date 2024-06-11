import React, { useState } from "react";
import { HomeFilter, MenuLineHorizontal } from "react-huge-icons/solid";
import Button from "./Button";
import { Loans, Receipts } from "..";
import { ArrowBackCircle, Receipt } from "react-huge-icons/outline";
import Clients from "./Clients";

const Admin = () => {
  const [page, setPage] = useState("Registered users");
  const [pages] = useState([
    {
      id: 1,
      pageName: "Registered users",
      isSlected: true,
    },
    { id: 2, pageName: "Loan application", isSlected: false },
    { id: 3, pageName: "Payment Receipt", isSlected: false },
    ,
  ]);

  const handleView = () => {
    switch (page) {
      case "Registered users":
        return <Clients />;
      case "Loan application":
        return <Loans />;
      case "Payment Receipt":
        return <Receipts />;
      default:
        break;
    }
  };

  const view = <div className="relative">{handleView()}</div>;
  const handlePageNavigate = (name) => {
    const pageSelected = pages.find((page) => page.pageName === name);
    setPage(pageSelected.pageName);
    pages.map((page) => ({
      ...page,
      isSlected: (page.isSlected = page.pageName == name && !page.isSlected),
    }));
  };
  const [menuSwitch, setSwitch] = useState(false);

  const handleSwitch = () => {
    let body = document.body;
    body.addEventListener("click", () => {
      setSwitch(!menuSwitch);
    });
  };

  return (
    <>
      <section className="bg-gray-100  scroll-smooth">
        {!menuSwitch && (
          <div className="h-10 hidden fixed z-20 top-0 right-0 max-sm:block bg-transparent   w-full">
            <MenuLineHorizontal
              className="text-5xl absolute right-0 text-amber-500"
              onClick={handleSwitch}
            />
          </div>
        )}

        {menuSwitch && (
          <div
            className={`absolute max-sm:flex max-md:flex max-lg:flex flex-col hidden justify-between left-0 top-0 z-10 ${
              menuSwitch ? "w-72" : "w-0"
            } transition duration-300 h-screen bg-amber-500`}
          >
            <div className="relative w-full   gap-1 flex flex-col h-full">
              {pages.map((page, i) => (
                <div className="relative" key={i}>
                  <Button
                    name={page.pageName}
                    view={handlePageNavigate}
                    isSelected={page.isSlected}
                  />
                </div>
              ))}
            </div>

            <ArrowBackCircle
              onClick={handleSwitch}
              className="text-4xl text-amber-950 absolute right-2 top-2"
            />

            <div className="relative   flex-col px-2 ">
              {" "}
              <div className="relative flex justify-start  ">
                <HomeFilter className="inline text-amber-700" />
                <h1 className="text-sm  text-amber-700 font-semibold">
                  Admin {"/"}
                  {""} {page}
                </h1>
              </div>
              <p className=" text-amber-700">
                Bucksloan &copy; {new Date().getFullYear}
              </p>
            </div>
          </div>
        )}
        <div className="flex w-full justify-between flex-col h-screen   bg-amber-500 ">
          <div className="relative w-full bg-gray-100 h-screen flex justify-between">
            <div className="flex flex-col w-96  bg-amber-300 max-sm:hidden ">
              <div className="relative h-24 flex items-center mb-1  bg-amber-700">
                <h1 className="text-2xl font-bold text-amber-300 ml-5">
                  Admin Data
                </h1>
              </div>
              <div className="relative w-full   gap-1 flex flex-col h-full">
                {pages.map((page, i) => (
                  <div className="relative" key={i}>
                    <Button
                      name={page.pageName}
                      view={handlePageNavigate}
                      isSelected={page.isSlected}
                    />
                  </div>
                ))}
              </div>

              <div className="relative h-52  flex-col px-2 ">
                {" "}
                <div className="relative flex justify-start  ">
                  <HomeFilter className="inline text-amber-700" />
                  <h1 className="text-sm  text-amber-700 font-semibold">
                    Admin {"/"}
                    {""} {page}
                  </h1>
                </div>
                <p className=" text-amber-700">
                  Bucksloan &copy; {new Date().getFullYear}
                </p>
              </div>
            </div>
            <div className="w-full main h-auto py-2 overflow-y-auto ">
              {view}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
