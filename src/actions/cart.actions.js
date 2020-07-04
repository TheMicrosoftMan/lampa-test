import { cartConstants } from "../constants";
import { products } from "../data/products";

export const addToCart = (id) => (dispatch, getState) => {
  const state = getState();

  try {
    const cart = [...state.cart.cart];
    const product = products.find((productItem) => productItem.id === id);
    const existedProduct = cart.find((product) => product.id === id);

    let updatedCart = [];
    if (existedProduct) {
      updatedCart = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: updatedCart,
    });
  } catch (error) {
    dispatch({
      type: cartConstants.CART_ERROR,
      payload: error,
    });
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const state = getState();

  try {
    const cart = [...state.cart.cart];
    const product = products.find((productItem) => productItem.id === id);
    const existedProduct = cart.find((product) => product.id === id);

    let updatedCart = [];
    if (existedProduct) {
      updatedCart = cart
        .filter((product) => product.quantity > 1)
        .map((product) => {
          if (product.id === id) {
            if (product.quantity > 1) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else {
              return;
            }
          }

          return product;
        });
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    dispatch({
      type: cartConstants.REMOVE_FROM_CART,
      payload: updatedCart,
    });
  } catch (error) {
    dispatch({
      type: cartConstants.CART_ERROR,
      payload: error,
    });
  }
};
