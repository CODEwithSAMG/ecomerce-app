import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h4>Ecommerce</h4>
      </Link>

      <ul className="ui_styles">
        <li className="list_items">
          <NavLink exact to="/" title="Home" activeClassName="active">
            Home
          </NavLink>
        </li>

        <li className="list_items">
          <NavLink to="/products" title="Products" activeClassName="active">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' title="Contact Us" activeClassName="active">
            Contact Us
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' title="About" activeClassName="active">
            About
          </NavLink>
        </li>

        <NavLink to='/login' title="Login">
          <button className="login_btn">Login</button>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
