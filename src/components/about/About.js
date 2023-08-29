import { useEffect, useState } from 'react';
import { TopLoader } from '../../UI/TopLoader';

const AboutUsPage = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(100)
    }, [])

    return (
        <div className="about-us-container">
            <TopLoader progress={progress} setProgress={setProgress} />

            <p className="about-us-heading">About Apna Bazza</p>
            <p className="about-us-description">Welcome to Apna Bazza, your premier destination for online shopping.</p>

            <p className='about-us-paragraph'> Established in [Year], Apna Bazza has embarked on a journey to redefine your online shopping experience. With an extensive range of top-notch products across various categories, we are committed to bringing you quality and convenience.

                Our story revolves around your satisfaction. We understand that each purchase holds importance, and that's why our dedicated customer support team is here to ensure a seamless shopping journey. At Apna Bazza, you're not just a customer; you're part of our family.

                We take your security seriously. Our robust payment gateways and state-of-the-art encryption guarantee safe transactions, allowing you to shop with confidence.

                Our commitment extends beyond shopping. We believe in giving back to society. A portion of your purchase goes towards supporting education, sustainability, and community welfare initiatives. Together, we can make a positive impact.

                Discover the latest fashion trends, upgrade your tech collection, and transform your living spaces with Apna Bazza. Thank you for choosing us as your trusted online shopping partner.
            </p>

            <section className="hero-section">
                <h1 className="hero-heading">Welcome to Apna Bazza</h1>
                <p className="hero-description">Your Premier Online Shopping Destination</p>
            </section>

            <section className="brand-story">
                <h2>Our Brand Story</h2>
                <p>Established in [Year], Apna Bazza embarked on a journey to redefine online shopping...</p>
            </section>

            <section className="values-mission">
                <h2>Our Values and Mission</h2>
                <p>At Apna Bazza, we're committed to providing quality products that enhance your life...</p>
            </section>

            <section className="cta-section">
                <h2>Discover Your Shopping Journey with Apna Bazza</h2>
                <p>Explore our wide range of products and experience the convenience of online shopping.</p>
                <a href="/products" className="cta-button">Shop Now</a>
            </section>

            <section className="cta-section">
                <h2>Discover Your Shopping Journey with Apna Bazza</h2>
                <p>Explore our wide range of products and experience the convenience of online shopping.</p>
                <p>From fashion essentials to cutting-edge electronics, we've curated a collection that caters to your every need.</p>
                <p>Discover the latest trends in clothing, find the perfect gadgets to elevate your lifestyle, and enhance your living spaces with our home essentials.</p>
                <p>Quality and affordability await you at Apna Bazza. Start exploring now!</p>
                <a href="/products" className="cta-button">Shop Now</a>
            </section>
        </div>
    )
}

export default AboutUsPage;