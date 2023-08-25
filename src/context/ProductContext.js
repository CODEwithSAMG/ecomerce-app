import { createContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = `https://fakestoreapi.com/products`;

const initialState = {
    products: [],
    singleProduct: {},
    isLoading: true,
    gridView: true,
    filters: {
        text: ""
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getApiProduct = async () => {
        try {
            const response = await fetch(`${API}`);
            const jsonResponse = await response.json();
            dispatch({ type: "products", payload: jsonResponse });
        } catch (error) {
            console.error(error)
        }
    }

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
        <AppContext.Provider value={{ ...state, dispatch, updateFilterValues, getSingleProduct, getApiProduct }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
