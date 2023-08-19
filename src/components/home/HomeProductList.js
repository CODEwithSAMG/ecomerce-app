import Cards from "../card/Cards";

export const HomeProductList = ({ productsData }) => (
    <div className='products_wrapper'>
        <h1>Best Selling Products</h1>
        <div className='app_container'>
            {productsData?.map((product) => {
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
);