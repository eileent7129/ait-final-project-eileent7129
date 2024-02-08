// My Events
import Layout from "../../components/Layout";
import NewEvent from "../../components/NewEvent";
import styles from "../../styles/events.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function MyEvents() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("api/eventsApi/");

        if (response.ok) {
          const returnedEvents = await response.json();
          setSubmittedData(returnedEvents);
        } else {
          console.log("Error retrieving data");
        }
      } catch (error) {
        console.log("An error occured: ", error);
      }
    };
    fetchEvents();
  }, []);
  console.log(submittedData);

  return (
    <>
      <Layout>
        <h2>These are my Events.</h2>
        <section>
          <div className={styles.event_container}>
            {submittedData.map((event, index) => (
				<Link href={`/events/${index}`} key={index}>
				 <NewEvent newEvent={event} />
				</Link>
            ))}
          </div>
          <div className={styles.button}>
            <Link href="/events/create-event">
              {" "}
              <Button className={styles.custom_button} variant="contained">
                Create Event
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
