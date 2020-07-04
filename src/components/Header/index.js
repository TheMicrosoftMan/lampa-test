import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ count, price }) => {
  return (
    <header>
      <nav>
        <Link to="/" className="header__cart-link">
          Home
        </Link>
        <Link to="/cart" className="header__cart-btn">
          Cart {count > 0 && `${count} (${price}₴)`}
        </Link>
      </nav>
    </header>
  );
};
