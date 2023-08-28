const CartItem = ({ image, title, price, count, DeleteCartItem, id }) => {

    return (
        <div key={id} className="additem_container bg_color_white">
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

                <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                    <button className="qty_btn">Qty : {count} </button>
                    <div>
                        <button className="delete_cart_btn" onClick={() => DeleteCartItem(id)}>
                            Delete
                        </button>
                    </div>
                </div>

                <hr />
                Subtotal: {price * count}
            </div>
        </div>
    )
}

export default CartItem;