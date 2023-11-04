const AddToCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { image, title, rating, price, count, id } = action.payload;

            let cartProduct = { image, title, rating, price, count };

            const existingProductInCart = state?.cart?.find((item) => {
                console.log(item.id)
                console.log(id)
                return item.id === id
            })
            if (existingProductInCart) {
                return {
                    cart: "hello"
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                };
            }

        case "deleteCartItem":
            return {
                ...state,
                cart: state.cart.filter((curVal) => {
                    return curVal.id !== action.payload;
                })
            };

        case "CLEAR_LOCAL_STORAGE_DATA":
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}

export default AddToCartReducer;