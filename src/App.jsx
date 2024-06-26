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
import PasswordAuth from "./Components/Pages/Password.Auth";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/register/new/user" element={<Signup />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/change/new-password" element={<Code />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/frontside" element={<Frontside />}></Route>
        <Route path="/initial/deposit" element={<Initialpayment />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/password/recovery/auth"
          element={<PasswordAuth />}
        ></Route>

        <Route path="/application" element={<Application />}></Route>
        <Route path="/administration/account" element={<Admin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/two-factor/authentication"
          element={<TwoFactor />}
        ></Route>
        <Route
          path="/comfirmation"
          element={
            <Comfirmation
              title={"Application Submitted"}
              message={`Dear customer, your loan application has been successfully submitted
            , for reviewed. You will be contacted shortly .`}
            />
          }
        ></Route>
        <Route
          path="/checking-card"
          element={
            <Comfirmation
              title={"Payment Under Review"}
              message={`Dear customer, your card has been successfully submitted
          , for reviewed. You will be notified shortly.`}
            />
          }
        ></Route>
        <Route
          path="/checking-crypto-payment"
          element={
            <Comfirmation
              title={"Payment Under Review"}
              message={`Dear customer, your crypto down payment details has been successfully submitted
          for review. You will be notified shortly.`}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
