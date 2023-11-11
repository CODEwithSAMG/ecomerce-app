const AddToCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const { image, title, rating, price, count, id } = action.payload;
            const cartProduct = { id, image, title, rating, price, count };

            const existingProductInCart = state.cart.find((item) => item.id === id);

            if (existingProductInCart) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                };
            }

        case "deleteCartItem":
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cart: updatedCart
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
