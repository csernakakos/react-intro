import "./NewEventForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NewEventForm({addEvent}) {

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");

    // Instead of the below, let's handleChange directly on 		the individual input:
    // const handleChange = (e) => {
    //     console.log("onChange!", e.target, e.target.value);

    //     // Save typed value into "title" variable:
    //     setEventName(e.target.value);
    // };

    const resetForm = () => {
        setEventName("");
        setEventDate("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("CLICKED SUBMIT");

        const event = {
            title: eventName,
            date: eventDate,
            id: uuidv4(),
        };

        addEvent(event);
        resetForm();
    };

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>

            <label>
                <span>Event name:</span>
                <input
                    type="text"
                    onChange={(e) => {setEventName(e.target.value)}}
                    value={eventName}
                />
            </label>

            <label>
                <span>Event date:</span>
                <input 
                    type="date" 
                    onChange={(e) => {setEventDate(e.target.value)}}
                    value={eventDate}
                />
            </label>

            <p>Summary:</p>
            <p>Event name: {eventName}</p>
            <p>Event data: {eventDate}</p>

            <button>Submit</button>
            
            <p className="reset-form" onClick={resetForm}>Reset form</p>
        </form>
    )
}