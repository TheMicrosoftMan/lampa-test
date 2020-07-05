import React from "react";
import { connect } from "react-redux";

import { ProductCard } from "../../components/ProductCard";
import { OrderForm } from "../../components/OrderForm";
import { Spinner } from "../../components/Spinner";

import { addToCart, removeFromCart } from "../../actions/cart.actions";
import { sendOrder } from "../../actions/order.actions";

const Cart = ({
  cart,
  totalPrice,
  addToCart,
  removeFromCart,
  sendOrder,
  order,
}) => {
  const showCart = cart.cart.length > 0;

  return (
    <div className="cart">
      <h2 className="page-name">Cart</h2>
      <div className="cart__content">
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
        {showCart && <OrderForm onSubmit={sendOrder} />}
      </div>
      {order.pending && <Spinner />}
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  sendOrder: sendOrder,
};

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export { connectedCart as Cart };
