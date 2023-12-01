import NewEventForm from "../components/NewEventForm";
import {useState} from 'react'
function CreateEvent() {
  const [submittedData, setSubmittedData] = useState([]);

  const onSubmitForm = (formData) => {
   
    setSubmittedData([...submittedData, formData]);
	console.log(submittedData)
  };
  return (
    <>
      <h2>Create Event</h2>
      <NewEventForm onSubmit={onSubmitForm} />
    </>
  );
}
export default CreateEvent;
