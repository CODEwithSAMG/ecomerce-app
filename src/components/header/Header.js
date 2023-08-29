import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdShoppingCart, MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "../../Menu";
// import "./Header.css"; // Import your custom CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <NavLink to="/">
        <p className="font_style_purple">
          <b className="font-bold">&lt;/&gt;</b>
          Apna Bazaar
        </p>
      </NavLink>

      {isMenuOpen ? (
          <MdClose className="crose_btn_on_navbar" onClick={toggleMenu} />
      ) : (
        <RxHamburgerMenu className="hamburger" onClick={toggleMenu} />
      )}

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="ui_styles">
          {Menu.map((curElem, index) => (
            <li key={index} className="list_items">
              <NavLink to={curElem.to} onClick={toggleMenu}>
                {curElem.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to='/login' title="Auth">
          <button type="button" className="login_btn">Login</button>
        </NavLink>

        <NavLink to="/signup" title="Signup">
          <button type="button" className="signup_btn">Signup</button>
        </NavLink>

        <NavLink to="/additem" className="cart_icon">
          <MdShoppingCart />
          <span>2</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
