import Cards from "../card/Cards";

export const HomeProductList = ({ products }) => (
    <div className='products_wrapper'>
        <h1>Best Selling Products</h1>
        <div className='app_container'>
            {products.map((product) => (
                <Cards
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </div>
    </div>
);