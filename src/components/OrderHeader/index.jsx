import React from "react";
import '@styles/orderHeader.scss';

const OrderHeader = ({ createdDate, articlesQuantity, totalPrice}) => {
  return (
    <div class="order">
      <p>
        <span>{createdDate}</span>
        <span> {articlesQuantity} articles</span>
      </p>
      <p>${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default OrderHeader;
