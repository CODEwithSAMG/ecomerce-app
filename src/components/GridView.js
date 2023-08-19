import React from 'react';
import { Cards } from './index';

const GridView = ({ products }) => {

    return (
        <div className='products_wrapper'>
            <div className='product_page_container'>
                {products && products?.map((curVal, id) => {
                    const { category, image, price } = curVal;

                    return (
                        <Cards key={id} id={id} category={category} image={image} price={price} />
                    )
                })}
            </div>
        </div>
    )
}

export default GridView;