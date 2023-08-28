import { useCartContext } from "../../context/AddToCartContext"
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const AddItem = () => {
    const { cart, DeleteCartItem, } = useCartContext();

    const handleClearAll = () => {
        localStorage.clear()
    }

    return (
        <>
            {cart && cart.length > 0 ?
                <>
                    <section style={{ marginBottom: "12rem" }} className="p-10">
                        <div style={{ display: "flex", gap: 40, flexDirection: "column" }}>
                            {cart?.map((curElem, index) => {
                                return <CartItem key={index} {...curElem} DeleteCartItem={DeleteCartItem} />
                            })}

                            {cart.length > 0 && <div className="bg_color_white add_item_second_container">
                                <div>
                                    Subtotal: {cart.count}
                                </div>


                            </div>}
                        </div>

                    </section>
                    {cart?.length > 0 && <div className="additem_wrapper">
                        <NavLink to={"/products"}>
                            <button>
                                Continue Shopping
                            </button>
                        </NavLink>


                        <button onClick={handleClearAll}>
                            Clear Cart
                        </button>
                    </div>
                    }</> : <div className="empty_cart bg_color_white">
                    <img src="empty-cart.jpg" /></div>}
        </>
    )
}

export default AddItem;

