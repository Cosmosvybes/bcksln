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
  Backside,
  ForgotPassword,
  Code,
  Terms,
  Admin,
} from "../src/index";
import { Route, Routes } from "react-router-dom";
import Initialpayment from "./Components/Initialpayment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        {/* <Route path="/policy" element={<Policy />}></Route> */}
        <Route path="/Admins" element={<Admin />}></Route>
        <Route path="/verify-code" element={<Code />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/frontside" element={<Frontside />}></Route>
        <Route path="/backside" element={<Backside />}></Route>
        <Route path="/initial/deposit" element={<Initialpayment />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/application" element={<Application />}></Route>
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
