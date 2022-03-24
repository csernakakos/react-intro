import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    // context is undefined if we're trying to use it outside its scope
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider.");
    }

    return context;
}