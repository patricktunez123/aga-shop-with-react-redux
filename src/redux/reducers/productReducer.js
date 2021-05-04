import { actionTypes } from "../constraints/actionTypes";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_PRODUCT:
      return { ...state, payload };
    case actionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
