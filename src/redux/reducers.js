import {
  POST_CART,
  DELETE_CART,
  DELETE_ALL_CART,
  GET_LENGTH,
} from "./types.js";

const initialState = {
  cart: [],
  length: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LENGTH:
      return {
        ...state,
        length: state.length.concat(action.payload),
      };

    case POST_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload[0]),
      };

    case DELETE_ALL_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        length: state.length.filter((item) => item.id !== action.payload),
      };

    case DELETE_CART:
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        return {
          ...state,
          cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],
          length: [
            ...state.cart.slice(0, index),
            ...state.cart.slice(index + 1),
          ],
        };
      }
      return state;

    default:
      return { ...state };
  }
};

export default rootReducer;
