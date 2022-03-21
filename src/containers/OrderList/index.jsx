import React, { Fragment } from "react";
import OrderCard from "@components/OrderCard";
import Orders from "@mock/orders.json";
import "@styles/myOrders.scss";

const OrderList = () => {
  const orderListRender = () =>
    Orders.map(({ articlesQuantity, createdDate, payment }) => (
      <OrderCard
        articlesQuantity={articlesQuantity}
        createdDate={createdDate}
        payment={payment}
      />
    ));
  return (
    <Fragment>
      <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My orders</h1>
          <div className="my-order-content">{orderListRender()}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
