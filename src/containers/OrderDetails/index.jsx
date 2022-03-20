import React from "react";
import '@styles/orderDetails.scss';
import ItemCard from "@components/itemCard";

const OrderDetails = ({ items }) => {
  const renderItemList = items.map(({ id, image, price, title, quantity }) => {
    return (
      <ItemCard
        id={id}
        image={image}
        price={price}
        title={title}
        quantity={quantity}
      />
    );
  });

  return <div className="order-details-container">{renderItemList}</div>;
};

export default OrderDetails;
