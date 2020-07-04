import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="header__cart-link">
          Home
        </Link>
        <Link to="/cart" className="header__cart-btn">
          Cart <span class="arrow">0</span>
        </Link>
      </nav>
    </header>
  );
};
