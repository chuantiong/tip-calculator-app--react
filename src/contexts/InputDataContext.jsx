import React, { createContext, useContext, useState } from 'react';

const InputDataContext = createContext();

const InputDataProvider = ({ children }) => {
    const [data, setData] = useState({
        bill: '',
        numberOfPeople: '',
        customTip: '',
        tip: '',
    });

    return (
        <InputDataContext.Provider value={{data, setData}}>
            {children}
        </InputDataContext.Provider>
    );
};

// Custom hooks
const useInputDataContext = () => useContext(InputDataContext);

export { InputDataProvider, useInputDataContext };