import React, { useEffect, useContext } from 'react';

import { Cards, HeroBanner } from '../index';
import { AppContext } from '../../context/ProductContext';

import "./products.scss";

const API = 'https://fakestoreapi.com/products';

const Products = () => {
    const { getData, isLoading, products } = useContext(AppContext);

    useEffect(() => {
        getData(API);
    }, []);
    console.log(isLoading, "isloading products");
    return (
        <>
            {!isLoading ? (
                <div style={{ position: "fixed", height: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {/* Replace the following div with your desired loading spinner */}
                    <div>Loading...</div>
                </div>
            ) : (
                <>
                    <div style={{ padding: "20px 200px" }}>
                        <HeroBanner />
                    </div>

                    <div className='products_wrapper'>
                        <h1>Best Selling Product</h1>
                        <div className='app_container'>
                            {products && products.map((curVal, id) => {
                                const { category, image, price } = curVal;
                                return (
                                    <Cards key={id} id={id} category={category} image={image} price={price} />
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Products;
