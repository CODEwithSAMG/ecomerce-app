import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { AppContext } from '../../context/ProductContext';
import StarRating from '../StarRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { LoadingSpinner } from '../../UI/LoadingSpinner';

const API = 'https://fakestoreapi.com/products';

const ItemDetail = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { dispatch, singleProduct: { title, price, description, image, rating } } = useContext(AppContext);

    const { id } = useParams();
    const updatedId = Number(id)

    const getSingleProduct = async (api) => {
        try {
            const response = await fetch(api);
            const jsonSingleProduct = await response.json();
            dispatch({ type: "singleProduct", payload: jsonSingleProduct });
        } catch (error) {
            console.error("Error fetching single product:", error);
            dispatch({ type: "single_prod_error" });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getSingleProduct(`${API}/${updatedId}`);
    }, []);

    if (isLoading) {
        return <div><LoadingSpinner /></div>;
    }


    return (
            <div className='product-detail-container'>
                <div className='product-detail-wrapper'>
                    <div>
                        <img src={image} width={500} height={500} />
                    </div>

                    <div>
                        <h3>{title && title}</h3>
                        <div className='reviews'>
                            <StarRating rating={rating} />
                            ({rating?.count} customer reviews)
                        </div>

                        <span className='product-detail-desc'>
                            <h4>Details:</h4>
                            {description}
                        </span>

                        <div>
                            MRP:
                            ${price}
                        </div>

                        <div className='quantity'>
                            <h4>Quantity:</h4>

                            <p>
                                <button type='button' className='minus'>
                                    <AiOutlineMinus />
                                </button>
                                <span className='num'>0</span>
                                <button className='plus'>
                                    <AiOutlinePlus />
                                </button>
                            </p>
                        </div>



                        <div className='product-data-warranty'>
                            <div className='product-warranty-icon'>
                                <TbTruckDelivery className='warranty-icon' />

                                <p>Free Delivery</p>
                            </div>

                            <div className='product-warranty-icon'>
                                <TbReplace className='warranty-icon' />

                                <p>30 Days Replacement</p>
                            </div>
                            <div className='product-warranty-icon'>
                                <TbTruckDelivery className='warranty-icon' />

                                <p>Delivered</p>
                            </div>
                            <div className='product-warranty-icon'>
                                <MdSecurity className='warranty-icon' />

                                <p>2 Years Warranty</p>
                            </div>
                        </div>

                        <Link to="/addItem">
                            <button className='add-to-cart'>
                                Add To Cart
                            </button>
                        </Link>

                        <button className='buy-now'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
    );
}

export default ItemDetail;