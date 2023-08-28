import { useEffect, useState } from "react";
import { useCartContext } from "../../context/AddToCartContext"
import { NavLink } from "react-router-dom";

const AddItem = () => {
    const { cart, DeleteCartItem } = useCartContext();
    const [tempDat, settempDat] = useState();

    const handleClearAll = () => {
        localStorage.clear()
    }

    useEffect(() => {
        const getLocalItem = JSON.parse(localStorage.getItem("cart"))
        console.log(getLocalItem)

        settempDat(getLocalItem)
    }, [])

    return (
        <>
            <section className="additem_wrapper p-10">
                {cart?.map(({ image, title, price, id, count }) => {
                    return <>
                        <div className="additem_container bg_color_white">
                            <figure>
                                <img src={image} alt="added_cart_item" />
                            </figure>

                            <div className="additem_right_container">
                                <div className="text_theme_color">
                                    {title}
                                </div>

                                61% off Deal

                                <div >
                                    $ {price}
                                </div>
                                <div >
                                    in Stock
                                </div>
                                <p>
                                    Eligible by free shipping
                                </p>

                                <button className="qty_btn">Qty : {count} </button>


                                <div >
                                    <button className="delete_cart_btn" onClick={() => DeleteCartItem(id)}>
                                        Delete
                                    </button>
                                </div>

                                <hr />
                                Subtotal: {price * count}
                            </div>
                        </div>



                        <div className="bg_color_white add_item_second_container">
                            <div>
                                {title}
                            </div>
                            <div >
                                $ {price}
                            </div>
                            <div >
                                in Stock
                            </div>

                        </div>
                    </>

                })}

                {cart.length > 0 && <div style={{ display: "flex", backgroundColor: "white", width: "100%", justifyContent: "space-around" }}>
                    <NavLink to={"/products"}>
                        <button>
                            Continue Shopping
                        </button>
                    </NavLink>


                    <button onClick={handleClearAll}>
                        Clear Cart
                    </button>
                </div>
                }
            </section>
        </>
    )
}

export default AddItem;

