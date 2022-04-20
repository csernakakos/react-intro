import "./Signup.css";
import {useState} from "react";
import {useSignup} from "../../hooks/useSignup";

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const {signup, isPending, error} = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName, thumbnail);
    }
    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        
        if (!selected || !selected.type.includes("image")) {
            setThumbnailError("Please select an image file.");
            return;
        }

        if (selected.size > 100000) {
            setThumbnailError("Please select an image with a file size of less than 100kb.");
            return;
        }

        setThumbnailError(null);
        setThumbnail(selected);
        console.log("Thumbnail updated!");
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>Email</span>
                <input
                    required
                    type="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                />
            </label>

            <label>
                <span>Password</span>
                <input
                    required
                    type="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}
                />
            </label>

            <label>
                <span>User name</span>
                <input
                    required
                    type="text"
                    onChange={(e) => {setDisplayName(e.target.value)}}
                    value={displayName}
                />
            </label>

            <label>
                <span>Thumbnail</span>
                <input
                    required
                    type="file"
                    onChange={handleFileChange}
                />
                {thumbnailError && 
                <div className="error">
                    {thumbnailError}
                </div>
                }
            </label>

            

            {!isPending && <button className="btn" type="submit">Sign up</button>}

            {isPending && <button className="btn disabled">Loading...</button>}

            {error && <div className="error">{error}</div>}
        </form>
    )
}