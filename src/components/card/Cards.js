import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

const Cards = ({ id, category, image, price }) => {

    return (
        <div className='product'>
            <NavLink style={{ textDecoration: 'none' }} to={`/item/${id}`}>
                <div className="product_card">
                    <LazyLoadImage
                        className='product_image'
                        src={image}
                        effect="blur"
                        loading="lazy"
                        alt='product image'
                    />

                </div>
            </NavLink>

            <div>
                <p>{category}</p>
                <p>$ {price}</p>
            </div>


        </div>
    );
};

export default Cards;
