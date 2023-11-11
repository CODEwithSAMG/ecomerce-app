import { AiFillTwitterCircle, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>CONTACT US:</h3>
                        <p>Email: gargshivam963963.com</p>
                        <p>Phone: +1234567890</p>
                        <p>City: Panipat</p>

                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>SOCIAL LINKS:</h3>
                        <Link to="https://github.com/CODEwithSAMG" target="_"><AiOutlineGithub style={{ fontSize: 25 }} />Github</Link>
                        <Link to="https://www.linkedin.com/in/shivam-softwaredev" target="_"><AiOutlineLinkedin style={{ fontSize: 25 }} />Linkedin</Link>
                        <Link to="https://twitter.com/ShivamG00378827" target="_"><AiFillTwitterCircle style={{ fontSize: 25 }} />Twitter</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your E-commerce Store</p>
            </div>
        </footer>
    );
};

export default Footer;
