import "./Create.css";
import {useState} from "react";

export default function Create() {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("");
    const [assignedUsers, setAssignedUsers] = useState("");

    return (
        <div className="create-form">
            <h2 className="page-title">Create a new project</h2>

            <form>
                <label>
                    <span>Project name</span>
                    <input 
                        required
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <span>Details</span>
                    <textarea 
                        required
                        type="text"
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                    ></textarea>
                </label>

                <label>
                    <span>Set due date</span>
                    <textarea 
                        required
                        type="date"
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                    ></textarea>
                </label>
            </form>
        </div>
    )
}