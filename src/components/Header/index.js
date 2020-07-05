import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ price }) => {
  return (
    <header>
      <nav>
        <Link to="/" className="header__cart-link">
          Home
        </Link>
        <Link to="/cart" className="header__cart-btn">
          Cart {price > 0 && ` - ${price}₴`}
        </Link>
      </nav>
    </header>
  );
};
