import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <p className='beat-solo'>
                Beats Solo Air
            </p>

            <h3>Summer Sale</h3>
            <LazyLoadImage
                className='hero-banner-image'
                effect="blur" src="headphone.webp" loading="lazy" />
            <div>

                <div className='desc'>
                    <h5>Description</h5>
                    <p>Best headphone on the market</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;