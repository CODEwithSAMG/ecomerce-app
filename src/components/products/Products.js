import React, { useEffect, useContext } from 'react';
import { FaListAlt } from "react-icons/fa"

import { AppContext } from '../../context/ProductContext';
import GridView from '../GridView';
import ListView from "../ListView"

const API = 'https://fakestoreapi.com/products';

const Products = () => {
    const { getData, products, gridView } = useContext(AppContext);
    console.log(gridView, "gridView");

    useEffect(() => {
        getData(API);
    }, []);

    return (
        <div className='products'>
            <div className='products_nthchild'>

            </div>

            <div>
                <span>
                    <FaListAlt />

                </span>

                {!gridView ?
                    <GridView products={products} /> :
                    <ListView products={products} />
                }
            </div>

        </div>
    )
}

export default Products;
