import { useEffect, useState } from 'react';
import { HomeProductList } from './HomeProductList';

import { HeroBanner } from '../index';
import { TopLoader } from '../../UI/TopLoader';

const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const [progress, setProgress] = useState(0);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const parsedResponse = await response.json(response);
            setProductsData(parsedResponse)
            setProgress(100);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ padding: "0px 19rem" }} >
            <TopLoader progress={progress} setProgress={setProgress} />

            <HeroBanner />

            <HomeProductList productsData={productsData} />
        </div>
    );
};

export default Home;
