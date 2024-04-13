import React, { createContext, useContext, useState } from "react";

const TipContext = createContext();

const TipProvider = ({ children }) => {
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <TipContext.Provider value={{ tipAmount, setTipAmount, total, setTotal }}>
            {children}
        </TipContext.Provider>
    );
};

// Custom hooks
const useTipContext = () => useContext(TipContext);

export { TipProvider, useTipContext };