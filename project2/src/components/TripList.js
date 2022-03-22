import "./TripList.css";
import "../hooks/UseFetch";
import { useState } from "react";
import { useFetch } from "../hooks/UseFetch";

export default function TripList() {
    const [url, setUrl] = useState("http://localhost:3002/trips")
    const { data: trips } = useFetch(url);

    return (
        <div className="trip-list">
            <h2>Trip list:</h2>
            <ul>
                {trips && trips.map(trip => (
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