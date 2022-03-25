import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducerFunc = (currentState, dispatchAction) => {
    switch (dispatchAction.type) {
        case "CHANGE_COLOR":
            return {...currentState, color: dispatchAction.payload};
        default:
            return currentState;
    } 
}

export function ThemeProvider({ children }) {
        const [state, dispatch] = useReducer(themeReducerFunc, {
            color: "#af5e8a"
        });

        const changeColor = (newColor) => {

            dispatch({type: "CHANGE_COLOR", payload: newColor})
        };

    return (
        <ThemeContext.Provider value={{...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}