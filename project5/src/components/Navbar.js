import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </NavLink>
                <SearchBar />
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div>
    )
}