import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

const Cards = ({ id, category, image, price }) => {

    return (
        <div className='product'>
            <NavLink style={{ textDecoration: 'none' }} to={`/item/${id}`}>
                <div className={`product_card`}>
                    <LazyLoadImage
                        className='product_image' width={200} height={200}
                        effect="blur" src={image} loading="lazy" />
                    <h3>{category}</h3>
                    <h3>$ {price}</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default Cards;
