import styles from "../styles/NewEvent.module.css";

function NewEvent({ newEvent }) {

	const formatDate = (date) => {
		return new Date(date).toLocaleDateString([], {month: 'long', day: 'numeric', year: 'numeric' })
	}

  return (
    <div>
      <div className={styles.events_card}>
        <div>
          <h3 className={styles.events_title}>{newEvent.event_title}</h3>
        </div>
        <div className={styles.events_details}>
          <p>Date: {formatDate(newEvent.date)}</p>
          <p>Start Time: {newEvent.startTime}</p>
		  <p>End Time: {newEvent.endTime}</p>
          <p>Price: ${newEvent.price}</p>
          <p>Address: {newEvent.address}</p>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
