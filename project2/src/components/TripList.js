import "./TripList.css";
import "../hooks/useFetch";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
    const [url, setUrl] = useState("http://localhost:3002/trips");

     // useRef to pass objects:
    const myObject = {isObject: true};

    const { data: trips, isPending, error } = useFetch(url, myObject);

    return (
        <div className="trip-list">
            <h2>Trip list</h2>
            {/* Error: */}
            {error && <div>{error}</div>}
            {/* Loader: */}
            {isPending && <div>Loading trips...</div>}
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