import React from "react";
import OrderHeader from "../../components/OrderHeader";
import OrderDetails from "../OrderDetails";

const Order = ({ order }) => {
  const { createdDate, totalPrice, articlesQuantity, items } = order;
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <OrderHeader
            createdDate={createdDate}
            totalPrice={totalPrice}
            articlesQuantity={articlesQuantity}
          />
          <OrderDetails items={items} />
        </div>
      </div>
    </div>
  );
};

export default Order;
