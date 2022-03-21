import React, { Fragment } from "react";
import Header from "@components/Header";
import Order from "@containers/Order";
import "@styles/myOrder.scss";
import order from "@mock/order.json";
const MyOrder = () => {
  return (
    <Fragment>
      <Header />
      <Order order={order} />
    </Fragment>
  );
};

export default MyOrder;
