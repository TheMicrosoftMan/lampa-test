import { orderConstants } from "../constants";

import { fakeServerRequest } from "../helpers/server";

export const sendOrder = () => (dispatch, getState) => {
  const state = getState();

  const cart = state.cart.cart;
  const user = state.form.order.values;

  const order = {
    cart: cart,
    user: user,
  };

  dispatch({
    type: orderConstants.SEND_ORDER_REQUEST,
  });

  fakeServerRequest(JSON.stringify(order))
    .then((data) => {
      dispatch({
        type: orderConstants.SEND_ORDER_SUCCESS,
      });

      alert("Well done!");
      console.log(JSON.parse(data));
    })
    .catch((error) => {
      dispatch({
        type: orderConstants.SEND_ORDER_ERROR,
        payload: JSON.stringify(error),
      });
    });
};
