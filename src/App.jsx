import {
  Signin,
  Signup,
  Welcome,
  Verify,
  Dashboard,
  Application,
  Comfirmation,
  Deposit,
  Frontside,
  ForgotPassword,
  Code,
  Terms,
  Profile,
  Admin,
} from "../src/index";
import { Route, Routes } from "react-router-dom";
import Initialpayment from "./Components/Pages/Initialpayment";
import TwoFactor from "./Components/Pages/TwoFactor";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import { isLoggedIn } from "./Components/Auth/Auth.controller";
import PasswordAuth from "./Components/Pages/Password.Auth";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route
          path="/welcome"
          element={isLoggedIn ? <Welcome /> : <Signin />}
        ></Route>
        <Route path="/register/new/user" element={<Signup />}></Route>
        <Route
          path="/verify"
          element={isLoggedIn ? <Verify /> : <Signin />}
        ></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/change/new-password" element={<Code />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/frontside"
          element={isLoggedIn ? <Frontside /> : <Signin />}
        ></Route>
        <Route path="/initial/deposit" element={<Initialpayment />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/password/recovery/auth"
          element={<PasswordAuth />}
        ></Route>

        <Route path="/application" element={<Application />}></Route>

        <Route
          path="/administration/account"
          element={isLoggedIn ? <Admin /> : <Signin />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Signin />}
        ></Route>
        <Route
          path="/two-factor/authentication"
          element={<TwoFactor />}
        ></Route>
        <Route
          path="/comfirmation"
          element={
            isLoggedIn ? (
              <Comfirmation
                title={"Application Submitted"}
                message={`Dear customer, your loan application has been successfully submitted
            , for reviewed. You will be contacted shortly .`}
              />
            ) : (
              <Signin />
            )
          }
        ></Route>
        <Route
          path="/checking-card"
          element={
            isLoggedIn ? (
              <Comfirmation
                title={"Payment Under Review"}
                message={`Dear customer, your card has been successfully submitted
          , for reviewed. You will be notified shortly.`}
              />
            ) : (
              <Signin />
            )
          }
        ></Route>
        <Route
          path="/checking-crypto-payment"
          element={
            isLoggedIn ? (
              <Comfirmation
                title={"Payment Under Review"}
                message={`Dear customer, your crypto down payment details has been successfully submitted
          for review. You will be notified shortly.`}
              />
            ) : (
              <Signin />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
