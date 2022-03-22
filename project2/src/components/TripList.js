import "./TripList.css";
import { useState, useEffect } from "react";

export default function TripList() {
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState("http://localhost:3002/trips")

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTrips(data));
    }, [url]);


    return (
        <div className="trip-list">
            <h2>Trip list:</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button
                onClick={() => {setUrl("http://localhost:3002/trips?loc=europe")}}
                >
                    Europe
                </button>
                <button
                onClick={() => {setUrl("http://localhost:3002/trips")}}
                >
                    Around the world
                </button>
            </div>
        </div>
    )
}