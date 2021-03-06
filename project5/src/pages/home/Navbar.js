import { NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </NavLink>
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div>
    )
}