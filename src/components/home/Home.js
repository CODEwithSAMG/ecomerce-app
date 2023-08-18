import React, { useEffect, useState } from 'react';
import { HomeProductList } from './HomeProductList';

import LoadingBar from 'react-top-loading-bar'

import { HeroBanner } from '../index';

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [progress, setProgress] = useState(0);
    const storedData = localStorage.getItem("products"); // Retrieve the data from local storage
    const data = JSON.parse(storedData); // Parse the JSON string to get the array

    const fetchDataAndStore = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                console.error("API request failed with status:", response.status);
                // Handle the error accordingly
                return;
            }

            const jsonProducts = await response.json();
            setApiData(jsonProducts);
            localStorage.setItem("products", JSON.stringify(jsonProducts));
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error accordingly
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem("products");
        if (storedData) {
            setApiData(JSON.parse(storedData));
        } else {
            fetchDataAndStore();
        }

        setProgress(100);
    }, []);

    return (
        <>
            <LoadingBar
                height="4px"
                color='rgb(104, 85, 224)'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <div style={{ padding: "20px 150px" }}>
                <HeroBanner />
                <br />
                <br />
            </div>
            <HomeProductList products={data || apiData} />
        </>
    );
};

export default Home;
