import React from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    return (
        <>
            <AppContext.Provider value={null}>{children}</AppContext.Provider>
        </>
    );
};

export const useAppContext = () => useContext(AppContext);
