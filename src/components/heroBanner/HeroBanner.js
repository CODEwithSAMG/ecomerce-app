import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <h1 className='beat-solo'>
                Beats Solo Air
            </h1>

            <h2>Summer Sale</h2>
            <LazyLoadImage
                className='hero-banner-image'
                effect="blur" src="headphone.webp"
                alt="hero banner image"
            />
            <div>

                <div className='desc'>
                    <p>Description</p>
                    <p>Best headphone on the market</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;