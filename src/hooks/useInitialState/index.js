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

  return { state, addToCart };
};

export default useInitialState;
