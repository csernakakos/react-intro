export default function EventList({events, handleClick}) {
    return (
        <>
            {events.map((e, i) => {
                return (
                  <div key={e.id}>
                  <h2>{i}: {e.title}</h2>
                  <button onClick={() => {handleClick(e.id)}}>delete event</button>
                </div>
            )
            })}
           
        </>
    )
}