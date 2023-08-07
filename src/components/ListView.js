import React from 'react';
import Cards from './card/Cards';

const ListView = ({ products }) => {
    return (
        <div className='products_wrapper'>
            <h1>Products</h1>
            <div>
                {products && products.map((curVal, id) => {
                    const { category, image, price } = curVal;
                    return (
                        <Cards key={id} id={id} category={category} image={image} price={price} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;