import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/ProductContext';
import { ListView, GridView } from "../../components";

import { TopLoader } from '../../UI/TopLoader';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { LoadingSpinner, CircularSpinner } from '../../UI/LoadingSpinner';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { gridView, dispatch, filters: { text }, updateFilterValues } = useContext(AppContext);

    const ViewComponent = gridView ? ListView : GridView;

    const toggleGridView = () => {
        dispatch({ type: 'gridView', payload: !gridView });
    };

    const handleSortChange = (e) => {
        setSelectedSortOption(e.target.value);
    };

    const fetchData = async (api) => {
        try {
            const response = await fetch(api);
            const parsedData = await response.json();
            setProducts(parsedData);
            setProgress(100);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData("https://fakestoreapi.com/products");
    }, []);

    if (error) {
        return <span>Error: {error.message}</span>;
    }

    if (products.length === 0) {
        return (
            <div className="loading_spinner">
                <CircularSpinner />
            </div>
        );
    }

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
                return 0;
        }
    });

    const filteredProducts = sortedProducts.filter(product =>
        product.title.toLowerCase().includes(text.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
    );

    const getUniqueData = (data) => {
        let newValue = data && data?.map((val) => {
            return val.category;
        });

        return ["All", ...new Set(newValue)];
    };

    const categoryData = getUniqueData(products);

    const onHandleCLickCategory = (val) => {
        setSelectedCategory(val);
    };

    return (
        <section className='products p-10'>
            <TopLoader progress={progress} setProgress={setProgress} />

            <section className='products_nthchild'>
                <input name="text" type="text" placeholder='Search' onChange={updateFilterValues} value={text} />

                {categoryData?.map((val, key) => {
                    return (
                        <div className='products_left_container ' key={key}>
                            <div onClick={() => onHandleCLickCategory(val)}>{val}</div>
                        </div>
                    );
                })}
            </section>

            <section className='products_nthchild2'>
                <div className='product_jthchild'>
                    <div>
                        <button className={gridView ? "active sort-btn" : "sort-btn"} onClick={toggleGridView}>
                            <BsList />
                        </button>
                        <button className={!gridView ? "active sort-btn" : "sort-btn"} onClick={toggleGridView}>
                            <BsFillGridFill />
                        </button>
                    </div>

                    <p>{filteredProducts.length} Products Available</p>

                    <div>
                        <select style={{ padding: 6, fontSize: "1rem", fontWeight: 500 }} value={selectedSortOption} onChange={handleSortChange}>
                            <option value='sort to high'>Price (lowest)</option>
                            <option value='sort to low'>Price (highest)</option>
                            <option value='a to z'>A to Z</option>
                            <option value='z to a'>Z to A</option>
                        </select>
                    </div>
                </div>

                <ViewComponent products={filteredProducts} />
            </section>
        </section>
    );
};

export default Products;
