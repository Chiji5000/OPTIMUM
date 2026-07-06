import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaSearch,
  FaTruck,
} from "react-icons/fa";
import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? "nav--open" : ""}`}>
      <div className="nav__topbar">
        <div className="nav__topbar-inner">
          <div className="nav__promo">
            Free shipping on orders over $50 — <Link to="/shop">Shop now</Link>
          </div>
          <Link to="/track" className="nav__topbar-track">
            <span className="nav__track-icon" aria-hidden="true">
              <FaTruck />
            </span>
            Track Order
          </Link>
        </div>
      </div>
      <div className="nav__container">
        <div className="nav__left">
          <Link to="/" className="nav__logo">
            OPTIMUM
          </Link>
        </div>

        <div className="nav__center">
          <ul className="nav__links">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <div className="nav__search">
            <input
              className="nav__search-input"
              placeholder="Search products..."
            />
            <button className="nav__search-btn" aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="nav__right">
          <div className="nav__icons">
            <Link to="/account" className="nav__icon" aria-label="Account">
              <FaUser />
            </Link>
            <Link to="/cart" className="nav__icon" aria-label="Cart">
              <FaShoppingCart />
            </Link>
            <button
              className="nav__mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      <div className={`nav__mobile-menu ${open ? "is-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
}

export default Nav;
