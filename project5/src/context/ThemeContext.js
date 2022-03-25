import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducerFunc = (currentState, dispatchAction) => {
    switch (dispatchAction.type) {
        case "CHANGE_COLOR":
            return {...currentState, color: dispatchAction.payload};
        case "CHANGE_MODE":
            return {...currentState, mode: dispatchAction.payload};
        default:
            return currentState;
    } 
}

export function ThemeProvider({ children }) {
        const [state, dispatch] = useReducer(themeReducerFunc, {
            color: "#af5e8a",
            mode: "light",
        });

        const changeColor = (newColor) => {

            dispatch({type: "CHANGE_COLOR", payload: newColor})
        };

        const changeMode = (newMode) => {
            dispatch(
                {
                    type: "CHANGE_MODE",
                    payload: newMode
                }
            )
        }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}