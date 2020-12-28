import { combineReducers } from "redux";

import { featuredProductListReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";

export default combineReducers({
  featuredProducts: featuredProductListReducer,
  cart: cartReducer,
});
