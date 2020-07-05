import React from "react";
import { connect } from "react-redux";

import { ProductCard } from "../../components/ProductCard";
import { OrderForm } from "../../components/OrderForm";

import { addToCart, removeFromCart } from "../../actions/cart.actions";

const Cart = ({ cart, totalPrice, addToCart, removeFromCart }) => {
  const showCart = cart.cart.length > 0;

  return (
    <div className="cart">
      {showCart ? (
        <div className="products">
          <div className="product-list">
            {cart.cart.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  quantity={product.quantity}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  inCart
                />
              );
            })}
          </div>
          <span className="products__total-price">TOTAL: {totalPrice}$</span>
        </div>
      ) : (
        "Cart is empty"
      )}
      {showCart && <OrderForm />}
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export { connectedCart as Cart };
