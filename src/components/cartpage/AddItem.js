import { useState, useEffect } from "react";
import { useCartContext } from "../../context/AddToCartContext"
import { NavLink } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "./CartItem";

const AddItem = () => {
    const [totalAmount, setTotalAmount] = useState(0);
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

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error("Error during payment:", error);
        }
    };

    useEffect(() => {
        let storageData = JSON.parse(localStorage.getItem("localcart"));

        if (Array.isArray(storageData) && storageData.length > 0) {
            const newTotalAmount = storageData.reduce((total, product) => {
                return total + product.price * product.count;
            }, 0);

            setTotalAmount(newTotalAmount);
        }
    }, [cart, totalAmount]);

    return (
        <>
            {cart && cart?.length > 0 ?
                <>
                    <section className="add_item_wrapper">
                        <div className="add_item_container">
                            {cart?.map((curElem, index) => {
                                return <CartItem id={index} key={index} {...curElem} DeleteCartItem={DeleteCartItem} />
                            })}
                        </div>

                        <>
                            {cart.length > 0 && <div className="bg_color_white add_item_second_container large_device_totaldetials">
                                <div className="hello">
                                    PRICE DETAILS
                                </div>

                                <div className="final_item_details">

                                    <div className="">
                                        <p>Initial Price</p>
                                        <p className="_1WpvJ7">₹ 20000</p>
                                    </div>

                                    <div>
                                        <p>Discount</p>
                                        <p>-14000</p>
                                    </div>

                                    <div>
                                        <p>Delivery Charges</p>
                                        <p>-180 Free</p>
                                    </div>

                                    <div>
                                        <p>Total Amount</p>
                                        <p>$ {totalAmount}</p>
                                    </div>
                                </div>

                                <button className="place_order_btn" onClick={makePayment}>Place Order</button>

                            </div>}


                            <div className="sm_device_totaldetials">
                                <div>
                                    <p>Total Price: </p>
                                    <p className="_1WpvJ7">{totalAmount}</p>
                                </div>

                                <button className="place_order_btn" onClick={makePayment}>Place Order</button>

                            </div>
                        </>
                    </section>

                    {cart?.length > 0 && <div className="additem_wrapper">
                        <NavLink to={"/products"}>
                            <button className="continue_shopping_btn">
                                Continue Shopping
                            </button>
                        </NavLink>


                        <button className="clear_cart_btn" onClick={clearCartItem}>
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

