import { cartConstants } from "../constants";

export const loadCart = () => (dispatch) => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    dispatch({
      type: cartConstants.LOAD_CART,
      payload: cart,
    });
  } catch (error) {
    dispatch({
      type: cartConstants.CART_ERROR,
      payload: error,
    });
  }
};

export const addToCart = (id) => (dispatch, getState) => {
  const state = getState();

  try {
    const cart = [...state.cart.cart];

    const product = state.products.products.find(
      (productItem) => productItem.id === id
    );
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

    localStorage.setItem("cart", JSON.stringify(updatedCart));

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

    let updatedCart = [];
    updatedCart = cart
      .map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      })
      .filter((product) => product.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

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
