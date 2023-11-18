import { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { AppContext } from '../../context/ProductContext';
import StarRating from '../StarRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCartContext } from '../../context/AddToCartContext';
import { TopLoader } from "../../UI/TopLoader";

const ItemDetail = () => {
    const [progress, setProgress] = useState(0)
    const [count, setCount] = useState(1);
    const [loading, setloading] = useState(false);
    const { getSingleProduct, singleProduct } = useContext(AppContext);
    const { AddToCart } = useCartContext();

    const { image, title, rating, description, price } = singleProduct;
    const { id } = useParams();

    const handleIncreaseCount = () => (
        setCount(count + 1)
    )

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    useEffect(() => {
        getSingleProduct(id);
        setProgress(100);
        setloading(false);
    }, [id, loading]);

    useEffect(() => {
        setloading(true);
    }, [])


    if (loading) {
        return <div style={{ height: "400px" }}>
            KLfjdkl
        </div>
    }

    return (
        <section className='product-detail-container p-10'>
            <TopLoader progress={progress} setProgress={setProgress} />
            <div className='product-detail-wrapper'>
                <figure className="bg_color_white w-40percent p-200">
                    <img src={image} alt='product_image' />
                </figure>

                <div className='bg_color_white w-60percent p-4'>
                    <h3>{title}</h3>
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

                    <div className='quantity m-1'>
                        <h4>Quantity:</h4>

                        <p style={{ display: "flex" }}>
                            <button type='button' className='minus' onClick={handleDecreaseCount}>
                                <AiOutlineMinus />
                            </button>

                            <span className='num'>{count}</span>

                            <button className='plus' onClick={handleIncreaseCount}>
                                <AiOutlinePlus />
                            </button>
                        </p>
                    </div>

                    <div className='product-data-warranty'>
                        <div className='product-warranty-data'>
                            <TbTruckDelivery className='warranty-icon' />

                            <p>Free Delivery</p>
                        </div>

                        <div className='product-warranty-data'>
                            <TbReplace className='warranty-icon' />

                            <p>30 Days Replacement</p>
                        </div>
                        <div className='product-warranty-data'>
                            <TbTruckDelivery className='warranty-icon' />

                            <p>Delivered</p>
                        </div>
                        <div className='product-warranty-data'>
                            <MdSecurity className='warranty-icon' />

                            <p>2 Years Warranty</p>
                        </div>
                    </div>

                    <div className='item_detail_btns'>
                        <NavLink to={"/additem"} onClick={() => AddToCart(image, title, rating, description, price, id, singleProduct, count)}>
                            <button className='add-to-cart'>
                                Add To Cart
                            </button>
                        </NavLink>

                        <button className='buy-now'>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemDetail;