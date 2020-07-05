import { handleActions } from "redux-actions";

import { cartConstants } from "../constants";

const initialState = {
  cart: [],
  pending: false,
  error: "",
};

export const cart = handleActions(
  {
    [cartConstants.LOAD_CART]: (state, { payload }) => {
      return {
        ...state,
        cart: [...payload],
      };
    },
    [cartConstants.ADD_TO_CART]: (state, { payload }) => {
      return {
        ...state,
        cart: [...payload],
      };
    },
    [cartConstants.REMOVE_FROM_CART]: (state, { payload }) => {
      return {
        ...state,
        cart: payload,
      };
    },
  },
  initialState
);
