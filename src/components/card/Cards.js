import { NavLink } from 'react-router-dom';
import './cards.scss';

const Cards = ({ id, category, image, price }) => {

    return (
        <div className='product'>
            <NavLink style={{ textDecoration: 'none' }} to={`/item/${id}`}>
                <div className={`product_card`}>
                    <img src={image} className='product_image' width={300} height={320} alt={category} />
                    <h3>{category}</h3>
                    <h3>$ {price}</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default Cards;
