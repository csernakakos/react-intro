import styles from "./Login.module.css";
import { useState } from "react";

export default function Login({UIstring}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return (
        <form 
            className={styles["login-form"]}
            onSubmit={handleSubmit}
        >
            <h2>{UIstring}</h2>
            {/* EMAIL */}
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                />
            </label>

            {/* PASSWORD */}
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}
                />
            </label>

            <button className="btn">{UIstring}</button>
        </form>
    )
}