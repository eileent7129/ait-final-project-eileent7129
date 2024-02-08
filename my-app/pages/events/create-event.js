// Create Events
import NewEventForm from "../../components/NewEventForm";
import Layout from "../../components/Layout";
import { useState } from "react";

function CreateEvent() {
  const [submittedData, setSubmittedData] = useState([]);

  const onSubmitForm = async (formData) => {

	try{
		const response = await fetch('/api/eventsApi/', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		})

		if(response.ok){
			setSubmittedData((prevData) => [...prevData, formData])
			console.log("New event added successfully")
			router.push('/events/')

		}
		else{
			console.log("Failed to add new event");
		}

	} catch (error) {
		console.log("there was an error submiiting the data: ", error);
	}
  };
  return (
    <>
      <Layout>
        <h2>Create Event</h2>
        <NewEventForm onSubmit={onSubmitForm} />
      </Layout>
    </>
  );
}
export default CreateEvent;
