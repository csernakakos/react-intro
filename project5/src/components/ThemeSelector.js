import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/icon.svg"

export default function ThemeSelector() {
    const themeColors = ["#E23F00", "#591DCC", "#000024"];

    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark");
    }
    console.log(mode);
    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    src={modeIcon}
                    onClick={toggleMode}
                    alt="dark/light toggle icon"
                    style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
                /> 
            </div>
            <div className="theme-buttons">
              
                {themeColors.map((color, i) => (
                    <div 
                        key={i}
                        onClick={() => {changeColor(color)}}
                        style={{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}