import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar sticky-top flex w-100">
      {/* <h3>
        <Link to="/">
          <img width={30} height={30} src="logo192.png" alt="" srcset="" />
          Ecomm
        </Link>
      </h3> */}

      <Link className="linktohome" to="/">
        <p className="logo">
        </p>

        <h4>
          Ecommerce
        </h4>
      </Link>
      <ul className="ui_styles">
        <li className="list_items">
          <Link to="/"> Home</Link>
        </li>

        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav >
  );
};

export default Header;
