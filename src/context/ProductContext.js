import { createContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = `https://fakestoreapi.com/products`;

const initialState = {
    singleProduct: {},
    gridView: true,
    filters: {
        text: ""
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getSingleProduct = async (id) => {
        try {
            const response = await fetch(`${API}/${id}`);
            const jsonSingleProduct = await response.json();
            dispatch({ type: "singleProduct", payload: jsonSingleProduct });
        } catch (error) {
            console.error("Error fetching single product:", error);
        } finally {
        }
    };

    const updateFilterValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        return dispatch({ type: "update_filter_value", payload: { name, value } })
    }

    return (
        <AppContext.Provider value={{ ...state, dispatch, updateFilterValues, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
