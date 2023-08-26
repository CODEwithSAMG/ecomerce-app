import { useCartContext } from "../context/AddToCartContext"

const AddItem = () => {
    const { cart, DeleteCartItem } = useCartContext();

    return (
        <>
            {cart.map(({ image, title, price, id }) => {

                return <section className="additem_wrapper p-10">
                    <div className="additem_container bg_color_white">
                        <figure>
                            <img src={image} alt="" />
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

                            <button className="qty_btn">Qty : 1 </button>


                            <div >
                                <button onClick={() => DeleteCartItem(id)}>
                                    Delete
                                </button>
                            </div>
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
                </section>
            })
            }
        </>
    )
}

export default AddItem