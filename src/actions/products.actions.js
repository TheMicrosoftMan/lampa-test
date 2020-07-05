import { productsConstants } from "../constants";
import { fakeServerRequest } from "../helpers/server";
import { products } from "../data/products";

export const getProducts = () => (dispatch) => {
  dispatch({
    type: productsConstants.GET_PRODUCTS_REQUEST,
  });

  fakeServerRequest(products)
    .then((data) => {
      dispatch({
        type: productsConstants.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: productsConstants.GET_PRODUCTS_ERROR,
        payload: JSON.stringify(error),
      });
    });
};
