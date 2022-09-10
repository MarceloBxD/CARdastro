import { createContext } from "react";

const initialState = {
    nome: 'Marcelo',
    idade: 20
}

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}