import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Navbar.css";
import { useTheme } from "../hooks/useTheme"; // IMPORT HOOK

export default function Navbar() {

    const { color, changeColor } = useTheme();

    return (
        <div className="navbar" style={{background: color}}>
            <nav>
                <NavLink to="/" className="brand">
                    <h1>React reducer</h1>
                </NavLink>
                <SearchBar />
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div>
    )
}