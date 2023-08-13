import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { ProductList } from './ProductList';

import { HeroBanner } from '../index';

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async (api) => {
        setLoading(true);
        try {
            const response = await fetch(api);
            const jsonProducts = await response.json();
            setApiData(jsonProducts);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData("https://fakestoreapi.com/products");
    }, []);

    return (
        <>
            {loading ? <LoadingSpinner /> : (
                <>
                    <div style={{ padding: "20px 200px" }}>
                        <HeroBanner />
                    </div>
                    <ProductList products={apiData} />
                </>
            )}
        </>
    );
}

export default Home;
