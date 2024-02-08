import React from "react";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";

let renderedTickets = [
  {
    user_guest: "user",
    event_title: "John and Anna's Wedding",
    date: new Date("2024-01-25"),
    time: "6pm",
    price: 0,
    address: "Madison Square Garden",
  },
  {
    user_guest: "another_user",
    event_title: "Summer Music Festival",
    date: new Date("2023-07-15"),
    time: "7:30pm",
    price: 20,
    address: "Central Park",
  },
  {
    user_guest: "guest123",
    event_title: "Tech Conference",
    date: new Date("2023-04-10"),
    time: "9am",
    price: 50,
    address: "Convention Center",
  },
  {
    user_guest: "event_lover",
    event_title: "Food and Wine Tasting",
    date: new Date("2023-05-20"),
    time: "5:30pm",
    price: 30,
    address: "Downtown Pavilion",
  },
];

const Home = () => {
  return (
    <div>
      <Layout>
        <h2>My Tickets</h2>
     
        <div className={styles.tickets_container}>
          {renderedTickets.map((ticket, index) => (
            <div className={styles.tickets_card} key={index}>
              <h3>{ticket.event_title}</h3>
              <p>Date: {ticket.date.toDateString()}</p>
              <p>Time: {ticket.time}</p>
              <p>Price: ${ticket.price}</p>
              <p>Address: {ticket.address}</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
