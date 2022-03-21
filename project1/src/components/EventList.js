import styles from "./EventList.module.css";

export default function EventList({events, handleClick}) {
    return (
        <div>
             {events.map((e, i) => {
                return (
                  <div className={styles.modularizedCard} key={e.id}>
                  <h2>{e.title}</h2>
                  <h2>When: {e.date}</h2>
                  <h2>Where: {e.location}</h2>
                  <button onClick={() => {handleClick(e.id)}}>delete event</button>
                </div>
            )
            })}
           
        </div>
    )
}