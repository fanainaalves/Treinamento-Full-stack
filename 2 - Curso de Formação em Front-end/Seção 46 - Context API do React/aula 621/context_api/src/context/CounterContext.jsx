import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvide = ({children}) =>{
    const [counter, setCounter] = useState(5)
    return (
        <CounterContext.Provider value={ counter, setCounter }>
            {children}
        </CounterContext.Provider>
    )
}