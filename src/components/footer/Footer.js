import { AiFillTwitterCircle, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="font_style_purple">
                <b className="font-bold">&lt;/&gt;
                    Apna Bazza </b> &copy; 2023 Copyright Apna Bazzar. ALL right reserved 2023
            </p>

            <div>
                <Link to="https://github.com/CODEwithSAMG" target="_"><AiOutlineGithub style={{ fontSize: 30 }} /></Link>
                <Link to="https://www.linkedin.com/in/shivam-softwaredev" target="_"><AiOutlineLinkedin style={{ fontSize: 30 }} /></Link>
                <Link to="https://twitter.com/ShivamG00378827" target="_"><AiFillTwitterCircle style={{ fontSize: 30 }} /></Link>
            </div>
        </footer>
    )
}

export default Footer