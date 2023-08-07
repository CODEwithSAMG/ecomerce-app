import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
    products: [],
    singleProduct: {},
    isLoading: "true",
    gridView: true
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async (api) => {
        try {
            const response = await fetch(api);
            const jsonProducts = await response.json();
            dispatch({ type: "products", payload: jsonProducts });
            dispatch({ type: "isLoading", payload: "false" });
        } catch {
            console.log("err");
        }
    }

    const getSingleProduct = async (api) => {
        try {
            const response = await fetch(api);
            const jsonSingleProduct = await response.json();
            dispatch({ type: "singleProduct", payload: jsonSingleProduct });
            dispatch({ type: "isLoading", payload: "false" });
        } catch (err) {
            console.log(err, "err");
            dispatch({ type: "single_prod_error" });
        }
    }

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, getData }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
