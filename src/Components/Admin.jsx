import React from "react";
import {
  CoinDollar,
  DocumentText,
  MoneyDollar,
  UsersTriple,
} from "react-huge-icons/solid";
import { Link, Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Loans from "./Loans";
import { Receipts } from "..";

const Admin = () => {
  return (
    <>
      {" "}
      <section className="flex w-full justify-between flex-col h-auto gap-2 bg-gray-100 ">
        <h1 className="text-8xl font-extrabold  max-sm:text-4xl mb-2 max-sm:text-center max-md:text-center ml-3">
          Administrator
        </h1>
        <header className="bg-gray-100 h-full  max-sm:h-18 w-52 ml-10 gap-5 max-sm:ml-0 max-sm:w-auto  justify-start items-center py-5 max-sm:py-2 flex  max-sm:flex-row max-sm:justify-center">
          <Link to={"/admin/registered-users"} className="hover:underline py-2">
            {" "}
            <div className="flex flex-col">
              <UsersTriple className="inline text-4xl " />{" "}
              <p className="inline max-sm:text-xs  ">Users </p>
            </div>
          </Link>
          <Link to={"/admin/loans"} className="hover:underline py-2">
            {" "}
            <div className="flex flex-col">
              <DocumentText className="inline text-4xl " />{" "}
              <p className="inline max-sm:text-xs  ">Loans </p>
            </div>
          </Link>
          <Link to={"/admin/receipts"} className="hover:underline py-2">
            {" "}
            <div className="flex flex-col">
              <CoinDollar className="inline text-4xl " />{" "}
              <p className="inline max-sm:text-xs  ">Pays </p>
            </div>
          </Link>
        </header>
        {/* <Routes>
          <Route path="/admin/registered-users" element={<Clients />}></Route>
          <Route path="/admin/deposit-receipt" element={<Receipts />}></Route>
          <Route path="/admin/loans" element={<Loans />}></Route>
        </Routes> */}
      </section>
    </>
  );
};

export default Admin;
