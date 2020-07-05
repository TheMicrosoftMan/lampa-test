import { handleActions } from "redux-actions";

import { orderConstants } from "../constants";

const initialState = {
  pending: false,
  error: "",
};

export const order = handleActions(
  {
    [orderConstants.SEND_ORDER_REQUEST]: (state) => {
      return {
        ...state,
        pending: true,
      };
    },
    [orderConstants.SEND_ORDER_SUCCESS]: (state) => {
      return {
        ...state,
        pending: false,
      };
    },
    [orderConstants.SEND_ORDER_ERROR]: (state, { payload }) => {
      return {
        ...state,
        pending: false,
        error: payload,
      };
    },
  },
  initialState
);
