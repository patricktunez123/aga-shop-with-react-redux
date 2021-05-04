import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
  products: productReducer,
  product: selectProductReducer,
});

export default reducers;
