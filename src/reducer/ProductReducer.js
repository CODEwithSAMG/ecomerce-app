const ProductReducer = (state, action) => {
    switch (action.type) {
        case "products":
            return {
                ...state,
                products: action.payload,
            };

        case "singleProduct":
            return {
                ...state,
                singleProduct: action.payload,
            };

        case "gridView":
            return {
                ...state,
                gridView: action.payload,
            };

        case 'update_filter_value':
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        default:
            return state;
    }
};

export default ProductReducer;
