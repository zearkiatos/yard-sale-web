import React from "react";
import "../../styles/itemCard.scss";

const ItemCard = ({ id, image, name, price }) => {
  return (
    <div key={id} className="shopping-cart">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ItemCard;
