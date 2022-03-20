import { useState } from "react";

const INITIAL_STATE = {
  cart: [],
  products: []
};

const useInitialState = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      products: state.products.map((product) => {
        if (payload.id === product.id) product.added = true;
        return product;
      })
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
      products: state.products.map((product) => {
        if (payload.id === product.id) product.added = false;
        return product;
      })
    });
  };

  const addProducts = (payload) => {
    setState({
      ...state,
      products: payload
    });
  };

  return { state, addToCart, removeFromCart, addProducts };
};

export default useInitialState;
