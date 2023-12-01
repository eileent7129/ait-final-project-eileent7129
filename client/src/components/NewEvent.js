import "../styles/NewEvent.css";

function NewEvent({ newEvent }) {

// const [submittedData, setSubmittedData] = useState([]);
// const onSubmitForm = (formData) => {
//     // Handle submitted form data (e.g., add to a list of events)
//     setSubmittedData([...submittedData, formData]);
//   };


  return (
    <div>
      <div className="events-card">
        <div>
          <h3 className="event-title">{newEvent.event_title}</h3>
        </div>
        <div className="event-details">
          <p>Date: {newEvent.date}</p>
          <p>Time: {newEvent.time}</p>
          <p>Price: ${newEvent.price}</p>
          <p>Address: {newEvent.address}</p>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
