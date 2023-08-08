import React, { useEffect, useState, useContext } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { AppContext } from '../../context/ProductContext';
import { ListView, GridView } from "../../components";

const API = 'https://fakestoreapi.com/products';

const Products = () => {
    const { getData, products, gridView, dispatch } = useContext(AppContext);
    const [selectedSortOption, setSelectedSortOption] = useState('');

    const toggleGridView = () => {
        dispatch({ type: 'gridView', payload: !gridView });
    };

    const handleSortChange = (e) => {
        setSelectedSortOption(e.target.value);
    };

    // Filter and sort the products based on the selected option
    const sortedProducts = [...products].sort((a, b) => {
        switch (selectedSortOption) {
            case 'sort to high':
                return a.price - b.price;
            case 'sort to low':
                return b.price - a.price;
            case 'a to z':
                return a.title.localeCompare(b.title);
            case 'z to a':
                return b.title.localeCompare(a.title);
            default:
        }
    });

    const ViewComponent = gridView ? ListView : GridView;

    useEffect(() => {
        getData(API);
    }, []);

    return (
        <div className='products'>
            <div className='products_nthchild'>
                sdfsd
            </div>

            <div className='products_nthchild2'>
                <div className='product_jthchild'>
                    <div>
                        <button className={gridView ? "active sort-btn" : "sort-btn"} onClick={toggleGridView}>
                            <BsList />
                        </button>
                        <button className={!gridView ? "active sort-btn" : "sort-btn"} onClick={toggleGridView}>
                            <BsFillGridFill />
                        </button>
                    </div>

                    <h4>{sortedProducts.length} Products Available</h4>

                    <div>
                        <select style={{ padding: 6 }} value={selectedSortOption} onChange={handleSortChange}>
                            <option value='sort to high'>Price (lowest)</option>
                            <option value='sort to low'>Price (highest)</option>
                            <option value='a to z'>A to Z</option>
                            <option value='z to a'>Z to A</option>
                        </select>
                    </div>
                </div>

                <ViewComponent products={sortedProducts} />
            </div>
        </div>
    );
};

export default Products;
