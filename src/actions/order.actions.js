import { orderConstants } from "../constants";

export const sendOrder = () => (dispatch, getState) => {
  const state = getState();

  const cart = state.cart.cart;
  const user = state.form.order.values;

  const order = {
    cart: cart,
    user: user,
  };

  try {
    dispatch({
      type: orderConstants.SEND_ORDER_REQUEST,
    });

    console.log(order);

    dispatch({
      type: orderConstants.SEND_ORDER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.SEND_ORDER_ERROR,
      payload: JSON.stringify(error),
    });
  }
};
