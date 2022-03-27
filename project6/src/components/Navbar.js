import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar({UIstrings}) {

    const [signup, login] = UIstrings;

    console.log(">>>>", login)
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li><NavLink to="/login">{login}</NavLink></li>
                <li><NavLink to="/signup">{signup}</NavLink></li>
            </ul>
        </nav>
    )
}