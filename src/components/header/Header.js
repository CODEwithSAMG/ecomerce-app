import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { Menu } from "../../Menu";

const Header = () => {
  return (
    <header className="navbar">
      <NavLink to="/">
        <p className="font_style_purple">
          <b className="font-bold">&lt;/&gt;</b>
          Apna Bazaar
        </p>
      </NavLink>

      <RxHamburgerMenu className="hamburger"/>

      <div className="d_flex nav_items_none">
        <ul className="ui_styles nav_items_none">
          {Menu.map((curElem, index) => {

            return (
              <li key={index} className="list_items">
                <NavLink to={curElem.to}>
                  {curElem.label}
                </NavLink>
              </li>
            )
          })}
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
