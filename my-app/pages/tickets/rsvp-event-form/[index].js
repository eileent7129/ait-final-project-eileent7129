//rsvp event form
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../../components/Layout";
import RSVPForm from "../../../components/RSVPForm";

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
  
  

function RSVPPage() {
  const router = useRouter();
  const { index } = router.query;

  const [submittedData, setSubmittedData] = useState([]);
  const event = renderedEvents[index]; //fix later

  const onSubmitForm = async (formData) => {
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedData([...submittedData, formData]);
        console.log("RSVP added successfully!");
      } else {
        console.log("Failed to add rsvp.");
      }
    } catch (error) {
      console.log("There was an error in rsvp-event-form: ", error);
    }
  };
  return (
    <>
      <Layout>
        <h2>RSVP List</h2>
        <RSVPForm onSubmit={onSubmitForm} event={event}/>
      </Layout>
    </>
  );
}

export default RSVPPage;
