// ItemContext.js
import React, { createContext, useState, useContext } from 'react';

const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </ItemContext.Provider>
    );
};
