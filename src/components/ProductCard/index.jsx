import React, { useState } from "react";
import "@styles/productCard.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductCard = ({ image, price, title }) => {
  const [cart, setCart] = useState([]);
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <div className="product-info">
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{title}</p>
        </div>
        <figure>
          <img src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
