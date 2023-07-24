import React from 'react';
import "./footer.scss";
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='footer'>
            &copy; 2023 Copyright Apna Bazzar. ALL right reserved 2023

            <AiFillInstagram />
            <AiOutlineTwitter />

        </div>
    )
}

export default Footer