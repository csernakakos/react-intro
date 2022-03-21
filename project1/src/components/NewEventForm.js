import "./NewEventForm.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NewEventForm({addEvent}) {

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("London");

    // useRef:
    // const title = useRef();
    // const date = useRef();


    // Instead of the below, let's handleChange directly on 		the individual input:
    // const handleChange = (e) => {
    //     console.log("onChange!", e.target, e.target.value);

    //     // Save typed value into "title" variable:
    //     setEventName(e.target.value);
    // };

    const resetForm = () => {
        setEventName("");
        setEventDate("");
        setLocation("London");

        // title.current.value = "";
        // date.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title.current.value, date.current.value);

        const event = {
            title: eventName,
            date: eventDate,
            location,
            // title: title.current.value,
            // date: date.current.value,
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
                    // ref={title}
                    onChange={(e) => {setEventName(e.target.value)}}
                    value={eventName}
                />
            </label>

            <label>
                <span>Event date:</span>
                <input 
                    type="date"
                    // ref={date}
                    onChange={(e) => {setEventDate(e.target.value)}}
                    value={eventDate}
                />
            </label>

            <label>
                <span>Event location:</span>
                <select onChange={(e) => {setLocation(e.target.value)}}>
                    <option value="london">London</option>
                    <option value="new york">New York</option>
                    <option value="paris">Paris</option>
                </select>
            </label>

            <p>Summary:</p>
            <p>Event name: {eventName}</p>
            <p>Event data: {eventDate}</p>

            <button>Submit</button>
            
            <p className="reset-form" onClick={resetForm}>Reset form</p>
        </form>
    )
}