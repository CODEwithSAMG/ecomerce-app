const ProductReducer = (state, action) => {
    switch (action.type) {
        case "single_prod_error":
            return {
                ...state,
                isError: true,
            };

        case "isLoading":
            return {
                ...state,
                isLoading: action.payload,
            };

        case "products":
            return {
                ...state,
                products: action.payload,
                isError: false,
            };

        case "singleProduct":
            return {
                ...state,
                singleProduct: action.payload,
                isError: false,
            };

        case "gridView":
            return {
                ...state,
                gridView: action.payload,
            };

        default:
            return state;
    }
};

export default ProductReducer;
