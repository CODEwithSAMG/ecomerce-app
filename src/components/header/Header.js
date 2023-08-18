import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h4 className="font_style_purple">
          <b className="font-bold">&lt;/&gt;</b>
          Apna Bazza</h4>
      </Link>

      <ul className="ui_styles">
        <li className="list_items">
          <Link to="/" title="Home" >
            Home
          </Link>
        </li>

        <li className="list_items">
          <Link to="/products" title="Products" >
            Products
          </Link>
        </li>

        <li>
          <Link to='/contact' title="Contact Us" >
            Contact Us
          </Link>
        </li>

        <li>
          <Link to='/about' title="About" >
            About
          </Link>
        </li>

        <Link to='/login' title="Login">
          <button className="login_btn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signup_btn">Signup</button>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
