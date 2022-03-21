import './App.css';
import Title from "./components/Title";
import Modal from "./components/Modal";
import Clock from "./components/Clock";
import NewEventForm from "./components/NewEventForm";
import EventList from "./components/EventList";
import { useState } from "react"; 

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  
  const handleClick = (id) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return id !== event.id;
      });
    });
  }

  const addEvent = (event) => {
      setEvents((previousEvents) => {
        return [...previousEvents, event];
      });

      setShowModal(false);
  }


  const version = process.env.REACT_APP_DOC_VERSION;
  const title = "MyTitle"

  return (
    <div className="App">

      <Clock name={"Akos"} />

      <button onClick={() => setShowModal(true)}>Add event</button>

      {showModal && <Modal isSalesModal={false}>
            <NewEventForm addEvent={addEvent} />
      </Modal>}

        <Title version={version} title={title} />
        
        {showEvents && (<div>
          <button onClick={() => {setShowEvents(false)}}>hide events</button>
        </div>)}

        {!showEvents && (<div>
          <button onClick={() => {setShowEvents(true)}}>show events</button>
        </div>)}
        
        {showEvents && <EventList events={events} handleClick={handleClick}/>}
    </div>
  );
}

export default App;
