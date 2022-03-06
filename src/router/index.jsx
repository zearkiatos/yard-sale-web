import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoveryPassword from "../containers/RecoveryPassword";
import CreateAccount from "../pages/CreateAccount";
import EditAccount from "../pages/EditAccount";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/recovery-password" element={<RecoveryPassword />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/edit-account" element={<EditAccount />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
