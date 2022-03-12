import React from "react";
import "@styles/orderCard.scss";

const OrderCard = ({ articlesQuantity, createdDate, payment }) => {
  return (
    <div className="order">
      <p>
        <span>{createdDate}</span>
        <span> {articlesQuantity} articles</span>
      </p>
      <p>${payment.toFixed(2)}</p>
      <img src="./icons/flechita.svg" alt="Arrow" />
    </div>
  );
};

export default OrderCard;
