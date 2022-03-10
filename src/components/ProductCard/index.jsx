import React from "react";
import "../../styles/productCard.scss";

const ProductCard = ({ image, price, name }) => {
  return (
    <div className="product-card">
      <img
        className="product-img"
        src={image}
        alt=""
      />
      <div className="product-info">
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
