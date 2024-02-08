// Find Events
import { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import NewEventForm from "../../components/NewEventForm";
import NewEvent from "../../components/NewEvent";
import Layout from "../../components/Layout";
import styles from "../../styles/events.module.css";

const formatTime= (timestamp) => {
	const time = new Date(timestamp);
	return time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}

let renderedEvents = [
  {
    user_host: "user",
    event_title: "Masquerade Ball",
    date: new Date("2023-03-25"),
	startTime:  formatTime(new Date().setHours(12, 30, 0, 0)),
    endTime: formatTime(new Date().setHours(13, 30, 0, 0)),
    price: 10,
    address: "60 Washington Square",
    guest_capacity: 100,
  },
  {
    user_host: "another_user",
    event_title: "Summer BBQ",
    date: new Date("2023-07-15"),
    startTime:  formatTime(new Date().setHours(12, 30, 0, 0)),
    endTime: formatTime(new Date().setHours(13, 30, 0, 0)),
    price: 15,
    address: "Beachfront Park",
    guest_capacity: 50,
  },
  {
    user_host: "event_planner",
    event_title: "Tech Conference",
    date: new Date("2023-05-10"),
    startTime:  formatTime(new Date().setHours(12, 30, 0, 0)),
    endTime: formatTime(new Date().setHours(13, 30, 0, 0)),
    price: 30,
    address: "Convention Center",
    guest_capacity: 200,
  },
  {
    user_host: "party_lover",
    event_title: "House Party",
    date: new Date("2023-04-20"),
	startTime:  formatTime(new Date().setHours(12, 30, 0, 0)),
    endTime: formatTime(new Date().setHours(13, 30, 0, 0)),
    price: 5,
    address: "123 Main Street",
    guest_capacity: 30,
  },
];



function FindEvents() {
  return (
    <div>
      <Layout>
        <h2>Find Events</h2>
        <section>
         
          <div className={styles.event_container}>
            {renderedEvents.map((event, index) => (
				<Link key={index} href={`/tickets/rsvp-event-form/${index}`}>
				<NewEvent key={index} newEvent={event} />
				</Link>
            ))}
          </div>
        </section>
        <div className={styles.button}>
        </div>
      </Layout>
    </div>
  );
}

export default FindEvents;
