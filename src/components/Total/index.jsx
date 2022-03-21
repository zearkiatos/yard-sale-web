import React from "react";
import "@styles/total.scss";

const Total = ({ total }) => (
  <div className="order">
    <p>
      <span>Total</span>
    </p>
    <p>${total.toFixed(2)}</p>
  </div>
);

export default Total;
