const AddToCartReducer = (state, action) => {
    switch (action.type) {
        case "cart":
            let { image, title, rating, description, price, id, singleProduct } = action.payload;

            let cardProduct = {
                image,
                title,
                id,
            }

            // const localsotar = localStorage.setItem("added_cartitems_to_local", JSON.stringify(action.payload))
            return {
                ...state,
                cart: [...state.cart, cardProduct]
            }

        case "deleteCartItem":
            // let updaed =

            return {
                ...state,
                cart: state.cart.filter((curVal) => {
                    return curVal.id !== action.payload
                })
            };

        default:
            return state;
    }
}

export default AddToCartReducer;