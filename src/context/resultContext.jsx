import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const ResultProvider = ({children}) => {
    const [result , setResult] = useState(null)
    return <ResultContext.Provider value={{result , setResult}}>
        {children}
    </ResultContext.Provider>
}

const useResult = () => useContext(ResultContext);

export { ResultProvider , useResult}