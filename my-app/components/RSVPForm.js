//rsvp event form
import { useState } from "react";
function RSVPForm({ onSubmit, event }) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
  });

  const onChangeHandler = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
	onSubmit({formData, event: event});
  };

  return (
    <>
      <h2>This is the RSVP Page.</h2>
      <form onSubmit={onSubmitHandler}>
        <label for="user_name">Name:</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          onChange={onChangeHandler}
        />

        <label for="user_email">Email:</label>
        <input
          type="text"
          name="user_email"
          id="user_email"
          required
          onChange={onChangeHandler}
        />

        <input type="submit" value="rsvp" />
      </form>
    </>
  );
}

export default RSVPForm;
