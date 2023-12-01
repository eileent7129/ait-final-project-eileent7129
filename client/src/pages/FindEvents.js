import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import NewEventForm from "../components/NewEventForm";
import NewEvent from "../components/NewEvent";
import "../styles/FindEvents.css";

let renderedEvents = [
  {
    user_host: "user",
    event_title: "Masquerade Ball",
    date: new Date("2023-03-25"),
    time: "3pm",
    price: 10,
    address: "60 Washington Square",
    guest_capacity: 100,
  },
  {
    user_host: "another_user",
    event_title: "Summer BBQ",
    date: new Date("2023-07-15"),
    time: "6:30pm",
    price: 15,
    address: "Beachfront Park",
    guest_capacity: 50,
  },
  {
    user_host: "event_planner",
    event_title: "Tech Conference",
    date: new Date("2023-05-10"),
    time: "9am",
    price: 30,
    address: "Convention Center",
    guest_capacity: 200,
  },
  {
    user_host: "party_lover",
    event_title: "House Party",
    date: new Date("2023-04-20"),
    time: "8pm",
    price: 5,
    address: "123 Main Street",
    guest_capacity: 30,
  },
];

function FindEvents() {

  return (
    <div>
      <h2>Find Events</h2>
      <section>
        {/* Display submitted events */}
        {/* <div className="event-container">
          {submittedData.map((event, index) => (
            <NewEvent key={index} newEvent={event} />
          ))}
        </div> */}
      </section>
	  <div className="button">
	  <Link to="/create-event">
        {" "}
        <Button className="custom-button" variant="contained">Create Event</Button>
      </Link>

	  </div>
    </div>
  );
}

export default FindEvents;
