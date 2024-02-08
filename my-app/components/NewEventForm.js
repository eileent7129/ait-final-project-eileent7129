import React, { useState } from "react";
import { useRouter } from "next/router";

import "../styles/NewEventForm.css";

function NewEvent({ onSubmit }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    event_title: " ",
    date: "",
    start_time: "",
    end_time: "",
    price: "",
    address: "",
    guest_capacity: "",
    description: "",
  });

  const onChangeHandler = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    console.log("form data: ", formData);
    await onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label for="event_title">Event Title:</label>
        <input
          type="text"
          name="event_title"
          id="event_title"
		  value={formData.event_title}
          required
          onChange={onChangeHandler}
        />

        <label for="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
		  value={formData.date}
          required
          onChange={onChangeHandler}
        />

        <label for="startTime">Start Time:</label>
        <input
          type="time"
          name="startTime"
          id="startTime"
		  value={formData.start_time}
          required
          onChange={onChangeHandler}
        />

        <label for="endTime">End Time:</label>
        <input
          type="time"
          name="endTime"
          id="endTime"
		  value={formData.end_time}
          required
          onChange={onChangeHandler}
        />

        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
		  value={formData.price}
          required
          onChange={onChangeHandler}
        />

        <label for="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
		  value={formData.address}
          required
          onChange={onChangeHandler}
        />

        <label for="guest_capacity">Number of Guests: </label>
        <input
          type="number"
          name="guest_capacity"
          id="guest_capacity"
		  value={formData.guest_capacity}
          required
          onChange={onChangeHandler}
        />

        <label for="description">Description:</label>
        <textarea
          name="description"
          id="description"
          rows="4"
		  value={formData.description}
          required
          onChange={onChangeHandler}
        ></textarea>

        <input type="submit" value="Create Event" />
      </form>
    </div>
  );
}

export default NewEvent;
