import { AiFillInstagram, AiFillTwitterCircle, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="font_style_purple">
                <b className="font-bold">&lt;/&gt;
                    Apna Bazza </b> &copy; 2023 Copyright Apna Bazzar. ALL right reserved 2023
            </p>

            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillTwitterCircle />

        </footer>
    )
}

export default Footer