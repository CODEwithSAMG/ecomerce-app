import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { AppContext } from '../../context/ProductContext';
import StarRating from '../StarRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// import { TopLoader } from "../../UI/TopLoader";

const ItemDetail = () => {
    // const [progress, setProgress] = useState(0)
    const { getSingleProduct, singleProduct } = useContext(AppContext);
    const { image, title, rating, description, price } = singleProduct;
    const { id } = useParams();
    // const updatedId = Number(id)

    const AddToCart = (items) => {
        console.log(items)
    }

    useEffect(() => {
        getSingleProduct(id);
        // setProgress(100);
    }, [id]);

    return (
        <div className='product-detail-container'>
            {/* <TopLoader progress={progress} setProgress={setProgress} /> */}
            <div className='product-detail-wrapper'>
                <div>
                    <img src={image} width={500} height={500} alt='product_image' />
                </div>
                <div style={{ borderLeft: "1px solid RGB(255, 255, 247)" }}>

                </div>
                <div>
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

                    {/* <Link to="/addItem"> */}
                    <button className='add-to-cart' onClick={() => AddToCart(singleProduct)}>
                        Add To Cart
                    </button>
                    {/* </Link> */}

                    <button className='buy-now'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;