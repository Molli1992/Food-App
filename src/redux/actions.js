import foods from "../data/dataFoods.js";
import {
  POST_CART,
  DELETE_CART,
  DELETE_ALL_CART,
  GET_LENGTH,
  DELETE_CHART,
} from "./types.js";

export function getLength(id) {
  return async function (dispatch) {
    let counter = { id: id };

    return dispatch({
      type: GET_LENGTH,
      payload: counter,
    });
  };
}

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

export function deleteCarts(id) {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_CART,
      payload: id,
    });
  };
}

export function deleteAllCarts(id) {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_ALL_CART,
      payload: id,
    });
  };
}

export function deleteChart() {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_CHART,
      payload: [],
    });
  };
}
