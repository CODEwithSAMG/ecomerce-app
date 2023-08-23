import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbar">
      <NavLink to="/">
        <h4 className="font_style_purple">
          <b className="font-bold">&lt;/&gt;</b>
          Apna Bazza</h4>
      </NavLink>

      <ul className="ui_styles">
        <li className="list_items">
          <NavLink to="/" title="Home" >
            Home
          </NavLink>
        </li>

        <li className="list_items">
          <NavLink to="/products/" title="Products" >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' title="Contact Us" >
            Contact Us
          </NavLink>
        </li>

        <li>
          <NavLink to='/about/' title="About" >
            About
          </NavLink>
        </li>

        <NavLink to='/login' title="Auth">
          <button className="login_btn">Login</button>
        </NavLink>

        <NavLink to="/signup" title="Signup">
          <button className="signup_btn">Signup</button>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
