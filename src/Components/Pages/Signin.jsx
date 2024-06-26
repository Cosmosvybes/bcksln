import { ArrowRight } from "react-huge-icons/outline";
import signin from "../../assets/signin.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";
import { Button, Col, Form, Input, Label, Spinner } from "reactstrap";

const Signin = () => {
  const navigate = useNavigate();
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
          localStorage.setItem("token", response.token);
          localStorage.setItem("userToken", response.userToken);
          navigate("/two-factor/authentication");
        } else {
          toast.warning(response.response);
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="relative py-4 border max-md:py-0 max-sm:py-2 px-64 max-sm:px-0 max-md:px-5 flex justify-start flex-col  h-screen bg-gray-100 ">
        <h1 className="text-Black font-semibold text-5xl max-sm:ml-2 ml-6 mt-2 max-sm:text-4xl">
          {" "}
          Welcome back
        </h1>
        <div className="relative flex justify-start gap-2 max-sm:ml-3  items-center ml-8">
          <div className="relative h-5 px-0.5 bg-black"></div>
          <h3 className="text-gray-500 font-extralight text-xl max-sm:text-xl ">
            Sign in to continue
          </h3>
        </div>

        <div className="flex justify-between w-full max-sm:w-auto bg-gray-100 mt-2 rounded-md px-8 py-3 max-sm:px-2 max-sm:flex-col">
          <div className="relative block">
            <h1 className="text-black font-extralight text-sm  mb-2">
              Enter your login details
            </h1>
            <div className="relative max-sm:w-full h-auto ml-">
              <Form className="">
                {/* <Row> */}
                <Col>
                  <b className="text-gray-400">Email</b>
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email here"
                    className="border border-gray-100 w-full px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                  />
                  <b className="text-gray-400">Password</b>
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
                  <div className="flex w-96  mt-3 max-sm:w-auto  justify-between px-1">
                    <div className="relative block">
                      <p className=" text-gray-500">Forgot password?</p>
                      <Link
                        to={"/forgot-password"}
                        className="text-gray-700 text-sm text-left -mt-1  underline block"
                      >
                        {" "}
                        Click here
                      </Link>
                    </div>

                    <div className="relative block">
                      <p className=" text-gray-500">Are you new here ?</p>
                      <Link
                        to={"/register/new/user"}
                        className="text-gray-700 text-sm text-right -mt-1  underline block"
                      >
                        {" "}
                        Create account
                      </Link>
                    </div>
                  </div>
                </Col>
                {/* </Row> */}
              </Form>
            </div>
          </div>
          <div className="relative block w-96 max-md:w-full max-sm:w-full ">
            <img src={signin} alt="image" className="object-cover" />
            <p className="text-gray-500 text-sm text-center max-sm:text-xs">
              Unlock your potential with BucksLoan! Enjoy quick approvals,
              competitive rates, and personalized service. Sign in now to take
              the first step toward achieving your financial goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
