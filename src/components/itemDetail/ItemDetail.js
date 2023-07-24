import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiseLoader } from 'react-spinners';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { AppContext } from '../../context/ProductContext';
import StarRating from '../StarRating';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const API = 'https://fakestoreapi.com/products';

const ItemDetail = () => {
    const { getSingleProduct, singleProduct: { title, price, description, image, rating }, isLoading } = useContext(AppContext);

    const { id } = useParams();
    const updatedId = Number(id)

    useEffect(() => {
        getSingleProduct(`${API}/${updatedId + 1}`);
    }, []);

    return (
        <>
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

                        <h6 className='product-detail-desc'>
                            <h4>Details:</h4>
                            {description}
                        </h6>

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

                        <button className='add-to-cart'>
                            Add To Cart
                        </button>
                        <button className='buy-now'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ItemDetail;