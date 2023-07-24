import React from 'react';
import { Link } from "react-router-dom";
const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beat-solo'>
                    Beats Solo Air
                </p>

                <h3>Summer Sale</h3>
                <img src="headphone.webp" alt="headphones" className='hero-banner-image' />
                <h1>FINE</h1>
                <div>
                    <Link to="/item/:id">
                        <button type='button'>BUTTON TEXT</button>
                    </Link>

                    <div className='desc'>
                        <h5>Description</h5>
                        <p>Best headphone on the market</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;