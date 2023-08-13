import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <Link className="linktohome" to="/">
        <p className="logo">
        </p>

        <h4>
          Ecommerce
        </h4>
      </Link>

      <ul className="ui_styles">
        <li className="list_items">
          <Link to="/" title="Home"> Home</Link>
        </li>

        <li className="list_items">
          <Link to="/products" title="Products"> Products</Link>
        </li>

        <li>
          <Link to='/contact' title="Contact Us">Contact Us</Link>
        </li>

        <li>
          <Link to='/about' title="Contact Us">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
