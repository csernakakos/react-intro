import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";

export default function Login({UIstring}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, error, isPending} = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password);
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

            {!isPending && <button className="btn">{UIstring}</button>}
            {isPending && <button className="btn" disabled>Loading...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}