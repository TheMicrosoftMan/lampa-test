import { handleActions } from "redux-actions";

import { productsConstants } from "../constants";

const initialState = {
  products: [],
  pending: false,
  error: "",
};

export const products = handleActions(
  {
    [productsConstants.GET_PRODUCTS_REQUEST]: (state) => {
      return {
        ...state,
        pending: true,
      };
    },
    [productsConstants.GET_PRODUCTS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        products: payload,
        pending: false,
      };
    },
    [productsConstants.GET_PRODUCTS_ERROR]: (state, { payload }) => {
      return {
        ...state,
        pending: false,
        error: payload,
      };
    },
  },
  initialState
);
