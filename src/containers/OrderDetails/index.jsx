import React from "react";
import ItemCard from "@components/itemCard";

const OrderDetails = ({ items }) => {
  const renderItemList = items.map(({ id, image, price, name, quantity }) => {
    return (
      <ItemCard
        id={id}
        image={image}
        price={price}
        name={name}
        quantity={quantity}
      />
    );
  });

  return <div>{renderItemList}</div>;
};

export default OrderDetails;
