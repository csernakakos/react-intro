import styles from "./EventList.module.css";

export default function EventList({events, handleClick}) {
    return (
        <div>
             {events.map((e, i) => {
                return (
                  <div className={styles.modularizedCard} key={e.id}>
                  <h2>{i}: {e.title}</h2>
                  <button onClick={() => {handleClick(e.id)}}>delete event</button>
                </div>
            )
            })}
           
        </div>
    )
}