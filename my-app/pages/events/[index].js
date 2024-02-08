// Full Event Page
import Layout from "../../components/Layout";
import styles from "../../styles/EventPage.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import eventImage from "../../public/event-image.jpg";

function formatDate(dateString) {
  
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
	{
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	  }
  );
  return formattedDate;
}

function EventPage({ event }) {
  console.log("this is the event in EventPage: ", event);
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.event_details}>
            <h1>{event.event_title}</h1>
            <h2>Event by nyu_events</h2>
            <h3>
              {formatDate(event.date)}, {event.startTime}PM - {event.endTime}PM
            </h3>
            <h3>{event.address}</h3>
          </div>
          <div className={styles.event_image}>
            <Image
              src={eventImage}
              alt="Event Image"
              width={800}
              height={400}
            ></Image>
          </div>
        </div>
        <section>
          <div classsName={styles.event_desc}>
            <p>{event.description}</p>
            {/* <Link href={`events/rsvp-list${index}`} className={styles.link}>
              View RSVP List
            </Link> */}
          </div>
          <Button className={styles.custom_button} variant="contained">
            Delete Event
          </Button>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const index = params.index;
  const response = await fetch(`http://localhost:3000/api/eventsApi`);
  let events = [];

  if (response.ok) {
    const data = await response.json();
    events = data;
  }

  return {
    props: {
      event: events[index] || {},
    },
  };
}

export default EventPage;
