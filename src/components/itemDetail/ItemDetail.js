import { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { AppContext } from '../../context/ProductContext';
import StarRating from '../StarRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCartContext } from '../../context/AddToCartContext';

// import { TopLoader } from "../../UI/TopLoader";

const ItemDetail = () => {
    // const [progress, setProgress] = useState(0)
    const { getSingleProduct, singleProduct } = useContext(AppContext);
    const { AddToCart, DeleteCartItem } = useCartContext();

    const { image, title, rating, description, price } = singleProduct;
    const { id } = useParams();
    // const updatedId = Number(id)

    useEffect(() => {
        getSingleProduct(id);
        // setProgress(100);
    }, [id]);

    return (
        <section className='product-detail-container p-10'>
            {/* <TopLoader progress={progress} setProgress={setProgress} /> */}
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

                    <NavLink to={"/additem"} onClick={() => AddToCart(image, title, rating, description, price, id, singleProduct)}>
                        <button className='add-to-cart'>
                            Add To Cart
                        </button>
                    </NavLink>

                    <button className='buy-now'>
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ItemDetail;