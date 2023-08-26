import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/AddToCartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],    
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = (image, title, rating, description, price, id, singleProduct) => {
        dispatch({ type: "cart", payload: { image, title, rating, description, price, id, singleProduct } });
    }

    const DeleteCartItem = (id) => {
        dispatch({ type: "deleteCartItem", payload: id });
        console.log(id)
    }

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
