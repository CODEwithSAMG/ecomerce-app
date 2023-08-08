import { useEffect, useContext } from 'react';
import { Cards, HeroBanner } from '../index';
import { AppContext } from '../../context/ProductContext';

const API = 'https://fakestoreapi.com/products';

const Home = () => {
    const { getData, isLoading, products, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'isLoading', payload: true });
        getData(API);
    }, []);

    return (
        <>
            {isLoading ? (
                <div style={{ position: "fixed", height: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <div>Loading...</div>
                </div>
            ) : (
                <>
                    <div style={{ padding: "20px 200px" }}>
                        <HeroBanner />
                    </div>

                    <div className='products_wrapper'>
                        <h1>Best Selling Products</h1>
                        <div className='app_container'>
                            {products && products.map((curVal) => {
                                const { id: productId, category, image, price } = curVal;
                                return (
                                    <Cards key={productId} id={productId} category={category} image={image} price={price} />
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Home;
