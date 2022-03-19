import { useState } from "react";

const INITIAL_STATE = {
  cart: []
};

const useInitialState = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    console.log(payload);
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id)
    });
  };

  return { state, addToCart, removeFromCart };
};

export default useInitialState;
