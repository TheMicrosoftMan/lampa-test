import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ProductCard } from "../../components/ProductCard";
import { Spinner } from "../../components/Spinner";

import { addToCart } from "../../actions/cart.actions";
import { getProducts } from "../../actions/products.actions";

const Home = ({ getProducts, addToCart, products }) => {
  useEffect(() => {
    products.products.length === 0 && getProducts();
  }, [products.products.length, getProducts]);

  return (
    <div className="Home">
      <h2 className="page-name">Home</h2>
      <div className="product-list">
        {products.products.length > 0 &&
          products.products.map((product) => (
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
      {products.pending && <Spinner />}
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
  getProducts: getProducts,
};

const mapStateToProps = (state) => state;

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export { connectedHome as Home };
