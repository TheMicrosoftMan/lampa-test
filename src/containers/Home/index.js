import React from "react";
import { connect } from "react-redux";

import { ProductCard } from "../../components/ProductCard";

import { addToCart } from "../../actions/cart.actions";

import { products } from "../../data/products";

const Home = ({ addToCart }) => {
  return (
    <div className="Home">
      Home
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

const mapStateToProps = (state) => state;

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export { connectedHome as Home };
