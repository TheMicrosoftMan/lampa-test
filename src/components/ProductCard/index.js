import React from "react";

export const ProductCard = ({
  id,
  title,
  price,
  image,
  addToCart,
  removeFromCart,
  quantity,
  inCart,
}) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={image} alt={title} />
      <span className="product-card__title">{title}</span>
      <span className="product-card__price">{price}₴</span>
      {inCart ? (
        <div className="product-card__edit">
          <button
            className="product-card__edit_btn"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <span className="product-card__edit_count">{quantity}</span>
          <button
            className="product-card__edit_btn"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="product-card__to-cart-btn"
          onClick={() => addToCart(id)}
        >
          To cart
        </button>
      )}
    </div>
  );
};
