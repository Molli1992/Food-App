import foods from "../data/dataFoods.js";
import { POST_CART, DELETE_CART, DELET_ALL_CART } from "./types.js";

export function postCarts(id) {
  return async function (dispatch) {
    let filterFood = foods.filter((food) => {
      return food.id === id;
    });

    return dispatch({
      type: POST_CART,
      payload: filterFood,
    });
  };
}

export function deleteCarts() {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_CART,
      payload: "lo que se manda al reducer",
    });
  };
}

export function deleteAllCarts() {
  return async function (dispatch) {
    return dispatch({
      type: DELET_ALL_CART,
      payload: "lo que se manda al reducer",
    });
  };
}
