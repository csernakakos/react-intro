import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

// All our state logic lives here:
const themeReducerFunc = (currentState, dispatchAction) => {
    switch (dispatchAction.type) {
        case "CHANGE_COLOR":
            return {...currentState, color: dispatchAction.payload};
        default:
            return currentState;
    } 
}

export function ThemeProvider({ children }) {
        // 1: reducer func, 2: initial value
        const [state, dispatch] = useReducer(themeReducerFunc, {
            color: "deeppink"
        });
        // state: first, initial state "deeppink", then, the updated value
        // dispatch function: dispatch state change to `themeReducerFunc` 
        
        const changeColor = (newColor) => {
            // dispatch will fire when user clicks `nav`. React will then fire the associated function `themeReducerFunc`
            dispatch({type: "CHANGE_COLOR", payload: newColor})
        }

    return (
        <ThemeContext.Provider value={{...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}