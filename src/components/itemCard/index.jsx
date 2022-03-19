import React from "react";
import close from "@icons/icon_close.png";
import "@styles/itemCard.scss";

const ItemCard = ({ id, image, title, price }) => {
  return (
    <div key={id} className="shopping-cart">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price.toFixed(2)}</p>
      <img src={close} alt="Close" />
    </div>
  );
};

export default ItemCard;
