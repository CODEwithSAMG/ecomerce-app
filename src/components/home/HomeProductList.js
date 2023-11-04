import { useEffect, useContext } from "react";
import Cards from "../card/Cards";

import { AppContext } from "../../context/ProductContext";

const HomeProductList = () => {
    const { products, getApiProduct } = useContext(AppContext);

    useEffect(() => {
        getApiProduct()
    }, [])

    return (
        <div className='products_wrapper'>
            <h1>Best Selling Products</h1>

            <div className='app_container'>
                {products?.map((product) => {
                    const { id, category, image, price } = product;
                    return (
                        <Cards
                            key={id}
                            id={id}
                            category={category}
                            image={image}
                            price={price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HomeProductList;