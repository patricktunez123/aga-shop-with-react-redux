import { actionTypes } from "../constraints/actionTypes";

export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
  };
};
