import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../../assets/signin.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Button, Col, Form, Input, Label, Row, Spinner } from "reactstrap";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://bck-server.onrender.com/api/signin", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((result) => {
        setLoading(false);
        if (!result.ok) throw new Error("Sign in failed");
        return result.json();
      })
      .then((response) => {
        setLoading(false);
        if (response.isAuthorised) {
          location.href = "/two-factor/authentication";
        } else {
          toast.warning(response.response);
          setLoading(false);
          // setResponse(response.response);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="relative py-10 max-md:py-0 max-sm:py-2 px-52 max-sm:px-0 max-md:px-5 flex justify-center flex-col  h-screen bg-gray-100  ">
        <h1 className="text-Black font-semibold text-5xl max-sm:ml-2 ml-7 mt-5 max-sm:text-4xl">
          {" "}
          Welcome back
        </h1>
        <h3 className="text-gray-500 font-extralight text-3xl max-sm:ml-3  ml-8 max-sm:text-2xl  mt-3">
          Sign in to continue
        </h3>
        <div className="flex justify-between w-full max-sm:w-auto bg-gray-100 mt-2 rounded-md px-8 py-3 max-sm:px-2 max-sm:flex-col">
          <div className="relative block">
            <h1 className="text-black font-extralight text-sm  mb-2">
              Enter your login details
            </h1>
            <div className="relative max-sm:w-full h-auto ml-">
              <Form className="">
                {/* <Row> */}
                <Col>
                  <Label>
                    <b className="text-gray-400">Email</b>
                  </Label>
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email here"
                    className="border border-gray-100 w-full px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                  />
                  <Label>
                    <b className="text-gray-400">Email</b>
                  </Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password here"
                    className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                  />
                  {loading ? (
                    <div className="relative flex justify-end w-full max-sm:w-full items-center">
                      <Spinner type="border" className="mt-1 text-end" />
                    </div>
                  ) : (
                    <Button
                      onClick={handleSignIn}
                      className=" rounded-lg border duration-300 transition border-black bg-black w-44 max-sm:w-full px-4 py-2  mt-2 text-white hover:bg-gray-800 hover:text-white"
                    >
                      Sign in
                      <ArrowRight className="inline text-white hover:text-white" />
                    </Button>
                  )}
                  <div className="flex w-96 flex-col max-sm:w-auto  justify-between px-1">
                    <Link
                      to={"/forgot-password"}
                      className="text-black text-sm  underline block mt-1"
                    >
                      {" "}
                      Forgot password ?
                    </Link>
                    <Link
                      to={"/register"}
                      className="text-black text-sm  underline block mt-1"
                    >
                      {" "}
                      Create new account
                    </Link>
                  </div>
                </Col>
                {/* </Row> */}
              </Form>
            </div>

            {/* <Form>
              <Row>
                <Col>
                  <Label>
                    <b className="text-gray-400">Email</b>
                  </Label>
                  <Input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your email"
                    className="border border-gray-100 w-full px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-auto"
                  />
                  <Label>
                    <b className="text-gray-400">Email</b>
                  </Label>
                  <Input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your email"
                    className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-auto"
                  />
                  {isLoading ? (
                    <Spinner type="border"  className="mt-1"/>
                  ) : (
                    <Button
                      onClick={handleSignIn}
                      className=" rounded-lg border duration-300 transition border-black bg-black w-44 max-sm:w-32 px-4 py-2  mt-2 text-white hover:bg-gray-800 hover:text-white"
                    >
                      Sign in
                      <ArrowRight className="inline text-white hover:text-white" />
                    </Button>
                  )}
                  <div className="flex w-96 flex-col max-sm:w-auto  justify-between px-1">
                    <Link
                      to={"/forgot-password"}
                      className="text-black text-sm  underline block mt-1"
                    >
                      {" "}
                      Forgot password ?
                    </Link>
                    <Link
                      to={"/register"}
                      className="text-black text-sm  underline block mt-1"
                    >
                      {" "}
                      Create new account
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form> */}
          </div>
          <img src={signin} alt="image" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Signin;
