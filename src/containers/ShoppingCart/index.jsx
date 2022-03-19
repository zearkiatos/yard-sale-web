import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Total from "@components/Total";
import "@styles/shoppingCart.scss";
import arrow from "@icons/flechita.svg";
import { totalization } from "@utils";
import OrderDetails from "@containers/OrderDetails";

const ShoppingCart = () => {
  const {
    state: { cart }
  } = useContext(AppContext);
  const sumTotal = ( prices = cart.map(product => product.price)) => totalization(prices);
  const renderOrderDetails = () =>
    cart.length > 0 ? (
      <OrderDetails items={cart} />
    ) : (
      "You don't have any item in your cart 😞"
    );
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={arrow} alt="Arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">{renderOrderDetails()}</div>
      <Total total={sumTotal()} />
      <button className="primary-button">Checkout</button>
    </aside>
  );
};

export default ShoppingCart;
