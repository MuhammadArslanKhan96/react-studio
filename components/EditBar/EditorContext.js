import { getSpeakers } from "@/helpers/get-speakers";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const initMockData = [
        {
            id: "0",
            actions: [
                {
                    id: "",
                    start: 0,
                    end: 2,
                    effectId: "effect0",
                },
            ],
            checked: false,
        },
    ];
    const initMockEffect = {
        effect0: {
            id: "effect0",
            name: "",
        },
    };
    const [mockData, setMockData] = useState(initMockData);
    const [mockEffect, setMockEffect] = useState(initMockEffect);
    const [speakers, setSpeakers] = useState([]);

    const getData = async () => {
        const data = await getSpeakers();
        setSpeakers(data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <AppContext.Provider
                value={{
                    mockData,
                    setMockData,
                    mockEffect,
                    setMockEffect,
                    initMockData,
                    initMockEffect,
                    speakers,
                    setSpeakers,
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    );
};

export const useAppContext = () => useContext(AppContext);
