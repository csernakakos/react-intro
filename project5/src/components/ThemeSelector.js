import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {
    const themeColors = ["#E23F00", "#591DCC", "#000024"];
    const { changeColor } = useTheme();

    return (
        <div className="theme-selector">
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