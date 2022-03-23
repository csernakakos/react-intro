import {useLocation } from "react-router-dom";

export default function Contact() {

    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const key = queryParams.get("key");
    console.log(key);

    return (
        <div>
            <p>{`http://localhost:3000/contact?key=${key}`}</p>
            <h2>Contact</h2>
        </div>
    )
}