import React, { useContext } from "react";
import "@styles/productCard.scss";
import AppContext from "@context/AppContext";
import addToCartIcon from "@icons/bt_add_to_cart.svg";

const ProductCard = ({ image, price, title }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (product) => {
    addToCart(product);
  };
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <div className="product-info">
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick({ image, price, title })}>
          <img src={addToCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
