import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li><NavLink to="/login">Log in</NavLink></li>
                <li><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
        </nav>
    )
}