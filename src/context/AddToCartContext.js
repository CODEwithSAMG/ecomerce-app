import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AddToCartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localStorageData = localStorage.getItem("cart")

    if (!localStorageData) {
        return [];
    }
    else {
        return JSON.parse(localStorageData)
    }
}

const initialState = {
    cart: getLocalCartData(),
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = (image, title, rating, description, price, id, singleProduct, count) => {
        dispatch({ type: "cart", payload: { image, title, rating, description, price, id, singleProduct, count } });
    }

    const DeleteCartItem = (id) => {
        dispatch({ type: "deleteCartItem", payload: id });
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, AddToCart, DeleteCartItem }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };
