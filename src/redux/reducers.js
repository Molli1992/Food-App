import { POST_CART, DELETE_CART, DELET_ALL_CART } from "./types.js";

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload[0]),
      };

    case DELETE_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case DELET_ALL_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
