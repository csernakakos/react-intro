import './App.css';
import Title from "./components/Title";
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

  const version = process.env.REACT_APP_DOC_VERSION;
  const title = "MyTitle"

  return (
    <div className="App">
        <Title version={version} title={title} />
        
        {showEvents && (<div>
          <button onClick={() => {setShowEvents(false)}}>hide events</button>
        </div>)}

        {!showEvents && (<div>
          <button onClick={() => {setShowEvents(true)}}>show events</button>
        </div>)}
        
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
