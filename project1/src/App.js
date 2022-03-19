import './App.css';
// Import useState from React library:
import { useState } from "react"; 

function App() {

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "text1", id: 1},
    {title: "text2", id: 2},
    {title: "text3", id: 3},
  ]);

  
  const handleClick = (id) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  }

  return (
    <div className="App">

        {showEvents && (<div>
          <button onClick={() => {setShowEvents(false)}}>hide events</button>
        </div>)}

        {!showEvents && (<div>
          <button onClick={() => {setShowEvents(true)}}>show events</button>
        </div>)}
        
        {/* If left-hand expression is true, run the right-hand expression: */}
        {showEvents && events.map((e, i) => (
          <div key={e.id}>
            <h2>{i}: {e.title}</h2>
            <button onClick={() => {handleClick(e.id)}}>delete event</button>
          </div>
      ))}
    </div>
  );
}

export default App;
