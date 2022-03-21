import './App.css';
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import { useState } from "react"; 

function App() {

  const [showModal, setShowModal] = useState(false);
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

  console.log(showModal);
  const handleClose = () => {
      // setShowModal(true);

      setShowModal(false);

  }

  const version = process.env.REACT_APP_DOC_VERSION;
  const title = "MyTitle"

  return (
    <div className="App">

      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && <Modal handleClose={handleClose}>
            <h2>Cookie policy</h2>
            <p>By visiting our website, you accept our Cookie policy and Privacy policy.</p>
      </Modal>}

        <Title version={version} title={title} />
        
        {showEvents && (<div>
          <button onClick={() => {setShowEvents(false)}}>hide events</button>
        </div>)}

        {!showEvents && (<div>
          <button onClick={() => {setShowEvents(true)}}>show events</button>
        </div>)}
        
        {/* {showEvents && events.map((e, i) => (
          <div key={e.id}>
            <h2>{i}: {e.title}</h2>
            <button onClick={() => {handleClick(e.id)}}>delete event</button>
          </div>
      ))} */}

        {showEvents && <EventList events={events}/>}
    </div>
  );
}

export default App;
