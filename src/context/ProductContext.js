import React, { createContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
    products: [],
    singleProduct: {},
    gridView: true,
    filters: {
        text: ""
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async (api) => {
        dispatch({ type: "isLoading", payload: true });
        try {
            const response = await fetch(api);
            const jsonProducts = await response.json();
            dispatch({ type: "products", payload: jsonProducts });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            dispatch({ type: "isLoading", payload: false });
        }
    };

    const getSingleProduct = async (api) => {
        try {
            const response = await fetch(api);
            const jsonSingleProduct = await response.json();
            dispatch({ type: "singleProduct", payload: jsonSingleProduct });
        } catch (error) {
            console.error("Error fetching single product:", error);
            dispatch({ type: "single_prod_error" });
        } finally {
            dispatch({ type: "isLoading", payload: false });
        }
    };

    const updateFilterValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        return dispatch({ type: "update_filter_value", payload: { name, value } })
    }

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, getData, dispatch, updateFilterValues }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
