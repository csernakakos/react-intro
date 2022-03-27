import styles from "./Signup.module.css";
import { useState } from "react";

export default function Signup({UIstring}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, userName);
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

            <button className="btn">{UIstring}</button>
        </form>
    )
}