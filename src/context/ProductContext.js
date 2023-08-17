import React, { createContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
    // products: [],
    singleProduct: {},
    gridView: true,
    filters: {
        text: ""
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFilterValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        return dispatch({ type: "update_filter_value", payload: { name, value } })
    }

    return (
        <AppContext.Provider value={{ ...state, dispatch, updateFilterValues }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
