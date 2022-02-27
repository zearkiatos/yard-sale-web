import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../containers/Login";
import history from "./history";
import RecoveryPassword from "../containers/RecoveryPassword";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World</div>} />
      <Route path="login" element={<Login />} />
    </Routes>
    // <Route>
    //   {/* <Route exact path="/" element={() => "Home"} /> */}
    //   <Route path="/login" component={Login} exact />
    //   {/* <Route path="/recovery-password" element={RecoveryPassword} />
    //       <Route element={() => "Not Found"} /> */}
    // </Routes>
  );
};

export default Router;
