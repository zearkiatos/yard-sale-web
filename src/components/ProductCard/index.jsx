import React, { useContext } from "react";
import "@styles/productCard.scss";
import AppContext from "@context/AppContext";
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import addedToCartIcon from "@icons/bt_added_to_cart.svg";

const ProductCard = ({ id, image, price, title, added }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (product) => {
    addToCart(product);
  };

  const renderButton = () =>
    added ? (
      <figure>
        <img src={addedToCartIcon} alt="Added to Cart" />
      </figure>
    ) : (
      <figure onClick={() => handleClick({ id, image, price, title, added })}>
        <img src={addToCartIcon} alt="Add to Cart" />
      </figure>
    );
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <div className="product-info">
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{title}</p>
        </div>
        {renderButton()}
      </div>
    </div>
  );
};

export default ProductCard;
