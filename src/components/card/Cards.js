import React from 'react';
import { Link } from 'react-router-dom';
import "./cards.scss";

const Cards = ({ id, category, image, price }) => {
    return (
        <div className='product'>
            <Link style={{ textDecoration: "none" }} to={`/item/${id}`}>
                <div className='product_card'>
                    <img src={image} className='product_image' width={300} height={320} />
                    {category}
                    <h3>$ {price}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Cards;
