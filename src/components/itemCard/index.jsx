import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import close from "@icons/icon_close.png";
import "@styles/itemCard.scss";

const ItemCard = ({ id, image, title, price }) => {
  const { removeFromCart } = useContext(AppContext);
  const removeHandle = (product) => {
    removeFromCart(product);
  };
  return (
    <div key={id} className="shopping-cart">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price.toFixed(2)}</p>
      <img src={close} alt="Close" onClick={() => removeHandle({ id })} />
    </div>
  );
};

export default ItemCard;
