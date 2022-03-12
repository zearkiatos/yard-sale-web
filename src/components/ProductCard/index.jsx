import React, { useState } from "react";
import "@styles/productCard.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductCard = ({ image, price, name }) => {
  const [cart, setCart] = useState([]);
  const addToCartHandle = () => {setCart([...cart, {image, price, name}]);};
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt="" />
      <div className="product-info">
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{name}</p>
        </div>
        <figure onClick={addToCartHandle}>
          <img src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
