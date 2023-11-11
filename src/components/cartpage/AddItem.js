import { useCartContext } from "../../context/AddToCartContext"
import { NavLink } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "./CartItem";

const AddItem = () => {
    const { cart, DeleteCartItem, clearCartItem } = useCartContext();
    const makePayment = async (e) => {
        e.preventDefault();

        const stripe = await loadStripe("pk_test_51O9ijUSGC39u197JPzuFrS8tvZAkT4AwiXPBeSxg5ZiWhHLf7MaTlDLjPpJoZJcPXvCrIIvsJvwk0OPB0l07lVKf00JEP3LaZw");

        const lineItems = cart.map((item) => ({
            price: item.price * 100, // Use the Price ID here
            quantity: item.count * 100,
        }));

        const headers = {
            'Content-Type': 'application/json'
        }

        try {
            const response = await fetch("http://localhost:5000/checkout-session", {
                method: 'post',
                body: JSON.stringify(lineItems),
                headers: headers
            })

            const session = await response.json();
            console.log("fkdljslkf", session)

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            console.log("fkdljslkf", result)

            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error("Error during payment:", error);
        }
    };

    return (
        <>
            {cart && cart?.length > 0 ?
                <>
                    <section style={{ marginBottom: "12rem" }} className="p-10">
                        <div style={{ display: "flex", gap: 40, flexDirection: "column" }}>
                            {cart?.map((curElem, index) => {
                                return <CartItem id={index} key={index} {...curElem} DeleteCartItem={DeleteCartItem} />
                            })}

                            {cart.length > 0 && <div className="bg_color_white add_item_second_container">
                                <div>
                                    Subtotal: {cart.count}
                                </div>

                                <hr />
                                <button
                                    onClick={makePayment}
                                >Checkout</button>
                            </div>}
                        </div>

                    </section>
                    {cart?.length > 0 && <div className="additem_wrapper">
                        <NavLink to={"/products"}>
                            <button>
                                Continue Shopping
                            </button>
                        </NavLink>


                        <button onClick={clearCartItem}>
                            Clear Cart
                        </button>
                    </div>
                    }
                </> : <div className="empty_cart bg_color_white">
                    <img src="empty-cart.jpg" /></div>}
        </>
    )
}

export default AddItem;

