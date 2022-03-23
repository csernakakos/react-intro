import { useLocation } from "react-router-dom";

export default function Contact() {

    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const valueOfKey = queryParams.get("myKey");
    console.log(key);

    return (
        <div>
            <p>{`http://localhost:3000/contact?myKey=${valueOfKey}`}</p>
            <h2>Contact</h2>
        </div>
    )
}