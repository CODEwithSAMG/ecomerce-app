import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AddToCartReducer";

const CartContext = createContext();

let getLocalStorageData;

const getLocalCartData = () => {
    const getLocalStorageData = localStorage.getItem("localcart");

    // Check if getLocalStorageData is null or an empty array
    if (!getLocalStorageData || getLocalStorageData === "[]") {
        return [];
    }

    // Parse and return the data
    return JSON.parse(getLocalStorageData);
};

const initialState = {
    cart: getLocalCartData(),
};
// console.log(initialState.cart)
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: { id: "id" } });
        // console.log(id)
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
