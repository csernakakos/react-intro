import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar({UIstrings}) {
    const [signup, login] = UIstrings;
    const {logout} = useLogout();
    const { user } = useAuthContext();

    console.log(">>>>", login)
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>

                {/* USER NOT LOGGED IN */}
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login">{login}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">{signup}</NavLink>
                        </li>
                    </>
                )}

                {/* USER LOGGED IN */}
                {user && (
                    <>
                    <li>hello, {user.displayName}</li>
                    <li>
                        <button className="btn" onClick={logout}>Log out</button>
                    </li>
                    </>
                ) 
                }   
            </ul>
        </nav>
    )
}