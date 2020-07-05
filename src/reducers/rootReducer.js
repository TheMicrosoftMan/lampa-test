import { combineReducers } from "redux";

import { cart } from "./cart.reducer";
import { form } from "./form.reducer";
import { order } from "./order.reducer";
import { products } from "./products.reducer";

export default combineReducers({
  cart,
  ...form,
  order,
  products,
});
