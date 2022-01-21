import React from "react";
import { Route, Routes } from "react-router-dom";
import ActivateAccount from "./ActivateAccount.js";
import ExpenseHome from "./ExpenseHome.js";
import Forgot from "./Forgot.js";
import Home from "./Home.js";
import Login from "./Login.js";
import OpenedEmail from "./OpenedEmail.js";
import SignUp from "./SignUp.js";


function RoutesBar({ loginState, setLoginState, token, setToken, email, setEmail }) {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login setLoginState={setLoginState}/>} />
        <Route path="/Forgot" element={<Forgot email={email} setEmail={setEmail}/>} />
        <Route
          path="/retrieveAccount/:email/:token"
          element={<OpenedEmail />}
        />
        <Route
          path="/activateAccount/:email/:token"
          element={<ActivateAccount />}
        />
        {loginState === "success" ? (
          <>
            {" "}
            <Route path="/expensetracker" element={<ExpenseHome />} />
          </>
        ) : (
          ""
        )}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default RoutesBar;
