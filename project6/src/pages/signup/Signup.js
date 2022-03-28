import styles from "./Signup.module.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup({UIstring}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const {error, isPending, signup} = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, userName);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles["signup-form"]}
            >
            <h2>{UIstring}</h2>

            {/* USERNAME */}
            <label>
                <span>User name:</span>
                <input
                    type="text"
                    onChange={(e) => {setUserName(e.target.value)}}
                    value={userName}
                />
            </label>

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

            {error && <p>{error}</p>}
            {isPending && <button className="btn" disabled>Loading...</button>}
            {!isPending && <button className="btn">{UIstring}</button>}
        </form>
    )
}