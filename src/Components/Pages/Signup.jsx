import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import signin from "../../assets/signin.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Terms from "../Terms";
import { toast } from "react-toastify";
import { Button, Col, Input, Label, Form, Spinner } from "reactstrap";
const Signin = () => {
  const [showTerms, setShowTerms] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirm] = useState("");
  const [agreement, setAgreement] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleSwitch = () => {
    setShowTerms(!showTerms);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const regex = /^([0-9]{3})[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;
    const isValidPhone = regex.test(phone);
    const passwordMatch = password == comfirmPassword;
    // setLoading(true);
    if (!firstname || !lastname || !email) {
      toast.warning("Complete your details");
    } else {
      if (!phone) {
        toast.warning("Enter your Phone");
      } else if (!isValidPhone) {
        toast.warning("Only USA residents");
      } else if (!password) {
        toast.warning("Enter your Password");
      } else if (!passwordMatch) {
        toast.warning("Passwords doesn't match");
      } else {
        if (agreement) {
          const userData = {
            firstname,
            lastname,
            email,
            phone,
            password,
          };
          setLoading(true);
          fetch("https://bck-server.onrender.com/api/signup", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(userData),
          })
            .then((result) => {
              const { ok, status, json } = result;
              if (!ok) {
                if (status == 403) {
                  throw new Error("User email exist");
                } else {
                  throw new Error("internal server errror,try again");
                }
              }

              return json();
            })
            .then((response) => {
              setLoading(false);
              if (response.response) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("userToken", response.userToken);
                toast.success(response.response);
                location.href = "/two-factor/authentication";
              } else {
                toast.warn(response.response);
                setLoading(false);
              }
            })
            .catch((err) => {
              setLoading(false);
              toast.warn(err.message);
            });
        } else {
          setLoading(false);
          toast.warning("Check the agreement button , then proceed");
        }
      }
    }
  };

  return (
    <>
      {!showTerms ? (
        <div className="relative py-3 max-md:py-0 max-sm:py-2 px-48 max-lg:px-0 max-sm:px-0 h-auto max-sm:h-auto  max-lg:gap-0 bg-gray-100">
          <button
            className="flex justify-start  text-gray-400 max-sm:ml-1 mb-4  ml-8 items-center py-0"
            onClick={() => history.back()}
          >
            <ArrowLeft className="text-2xl inline" /> back
          </button>
          <h1 className="text-Black font-semibold text-5xl max-sm:text-4xl ml-6 max-sm:ml-1">
            {" "}
            Get started{" "}
            <ArrowRight className="text-5xl max-sm:text-4xl text-gray-900 inline" />
          </h1>
          <div className="relative flex justify-start gap-2 max-sm:ml-2  items-center ml-8">
            <div className="relative h-5 px-0.5 bg-black"></div>
            <h3 className="text-gray-500 font-extralight text-xl max-sm:text-xl ">
              Sign up to join us.
            </h3>
          </div>

          <div className="flex justify-between gap-2 w-full  max-lg:w-auto max-md:w-auto bg-gray-100 mt-2 rounded-md px-8  py-3 max-sm:px-2 max-md:flex-col-reverse max-sm:flex-col">
            <div className="relative block">
              <h1 className="text-black font-extralight text-sm  mb-2">
                Enter your details
              </h1>
              <div className="relative max-sm:w-full h-auto ">
                <Form className="">
                  <Col>
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Firstname</b>
                    {/* </Label> */}
                    <Input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Enter your firstname"
                      className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                    />
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Lastname</b>
                    {/* </Label> */}
                    <Input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Enter your lastname"
                      className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                    />
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Email</b>
                    {/* </Label> */}
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                      className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                    />
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Phone</b>
                    {/* </Label> */}
                    <Input
                      type="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="000-000-0000"
                      className="border  text-xl border-gray-100 w-96 px-4 py-2 max-lg:w-full rounded-lg outline-gray-400 block max-sm:w-full"
                    />
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Password</b>
                    {/* </Label> */}
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                    />
                    {/* <Label> */}
                    <b className="text-gray-400 text-sm">Confirm Password</b>
                    {/* </Label> */}
                    <Input
                      type="password"
                      value={comfirmPassword}
                      onChange={(e) => setComfirm(e.target.value)}
                      placeholder="Comfirm your password"
                      className="border border-gray-100 w-full m px-4 py-2 rounded-lg outline-gray-400 block max-sm:w-full"
                    />

                    <div className="flex justify-center gap-2 items-center max-sm:w-full w-96">
                      <Input
                        type="checkbox"
                        value={agreement}
                        onChange={(e) => setAgreement(e.currentTarget.checked)}
                      />
                      <p className="text-gray-400  text-xs mt-3">
                        By clicking on Proceed, you agree to our{" "}
                        <button
                          className="text-xs text-sky-900 inline"
                          onClick={() => setShowTerms(!showTerms)}
                        >
                          {" "}
                          Terms of Service
                        </button>{" "}
                        .You are also elect to receive updates,newsletters and
                        offers from buckloans.
                      </p>
                    </div>
                    <div className="flex w-96 flex-col  max-sm:w-full max-sm:flex-col justify-start  ">
                      {loading ? (
                        <div className="relative flex justify-end w-full max-sm:w-full items-center">
                          <Spinner type="border" className="mt-1 text-end" />
                        </div>
                      ) : (
                        <Button
                          onClick={handleSignUp}
                          className=" rounded-lg border duration-300 transition border-black bg-black w-44 max-sm:w-full px-4 py-2  mt-2 text-white hover:bg-gray-800 hover:text-white"
                        >
                          Create account
                          <ArrowRight className="inline text-white hover:text-white" />
                        </Button>
                      )}
                      <div className="flex justify-start w-full text-gray-500 gap-1  flex-col mt-2">
                        <p className="ml-2 text-gray-500">Already have an account ?</p>
                        <Link
                          to={"/"}
                          className=" text-sm text-gray-700 text-left -mt-2 underline ml-2  block"
                        >
                          Sign in here
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Form>
              </div>
            </div>

            <div className="relative block w-96 max-md:w-full max-sm:w-full ">
              <img
                src={signin}
                alt="image"
                className="object-contain h-96 w-full max-md:w-full max-sm:w-full"
              />
              <div className="relative  px-2 py-2 w-full">
                <p className="text-gray-500 max-sm:text-xs text-center text-sm">
                  Unlock the future you deserve with BucksLoan’s flexible and
                  affordable loan options! Whether you're planning a dream
                  vacation, starting a new business, or consolidating debt, we
                  offer competitive rates and personalized service to help you
                  reach your financial goals. Apply today and experience a
                  seamless, hassle-free process with quick approvals and
                  exceptional customer support. Your dreams are just a click
                  away—join our community of satisfied customers and take the
                  first step towards a brighter financial future with BucksLoan!
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Terms callback={handleSwitch} />
      )}
    </>
  );
};

export default Signin;
