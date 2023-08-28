const AddToCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { image, title, rating, price, count } = action.payload;

            let cartProduct = { image, title, rating, price, count };

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };

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