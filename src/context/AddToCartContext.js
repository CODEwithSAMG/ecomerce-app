import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AddToCartReducer";

const CartContext = createContext();

var getLocalStorageData;
const getLocalCartData = () => {
    getLocalStorageData = localStorage.getItem("localcart")

    if (getLocalStorageData === null) {
        return [];
    } else if (getLocalStorageData === []) {
        return [];
    }
    else {
        return JSON.parse(getLocalStorageData)
    }
}

const initialState = {
    cart: getLocalCartData(),
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = (image, title, rating, description, price, id, singleProduct, count) => {
        dispatch({ type: "ADD_TO_CART", payload: { image, title, rating, description, price, id, singleProduct, count } });
    }

    const DeleteCartItem = (id) => {
        dispatch({ type: "deleteCartItem", payload: id });
    }

    const clearCartItem = () => {
        dispatch({ type: "CLEAR_LOCAL_STORAGE_DATA" })
        localStorage.removeItem("localcart")
    }

    useEffect(() => {
        localStorage.setItem("localcart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, AddToCart, DeleteCartItem, clearCartItem }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };
