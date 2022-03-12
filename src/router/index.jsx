import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import RecoveryPassword from "@pages/RecoveryPassword";
import CreateAccount from "@pages/CreateAccount";
import EditAccount from "@pages/EditAccount";
import NewPassword from "@pages/NewPassword";
import MyOrder from '@pages/MyOrder';
import MyOrders from '@pages/MyOrders';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/recovery-password" element={<RecoveryPassword />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/edit-account" element={<EditAccount />} />
    <Route path="/new-password" element={<NewPassword />} />
    <Route path="/my-order" element={<MyOrder />} />
    <Route path="/my-orders" element={<MyOrders />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
