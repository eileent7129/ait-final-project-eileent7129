import React, {useState} from 'react';
import '../styles/NewEventForm.css'

function NewEvent({onSubmit}) {

	const [formData, setFormData] = useState({
		event_title: ' ',
		date: '',
		time: '',
		price: '',
		address: '',
		guest_capacity: '',
		description: ''
	})


	const onChangeHandler = (evt) => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
		})
		
	}

	const onSubmitHandler = (evt) => {
		evt.preventDefault();
		console.log("form data: ", formData)
		onSubmit(formData)
	}

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label for="event_title">Event Title:</label>
        <input 
		type="text" 
		name="event_title" 
		id="event_title" 
		required 
		onChange={onChangeHandler}
		/>

        <label for="date">Date:</label>
        <input 
		type="date" 
		name="date" 
		id="date" 
		required 
		onChange={onChangeHandler}
		/>

        <label for="time">Time:</label>
        <input 
		type="text" 
		name="time" 
		id="time" 
		required 
		onChange={onChangeHandler}
		/>

        <label for="price">Price</label>
        <input 
		type="number" 
		name="price" 
		id="price" 
		required 
		onChange={onChangeHandler}
		/>

        <label for="address">Address</label>
        <input 
		type="text" 
		name="address" 
		id="address" 
		required 
		onChange={onChangeHandler}
		/>

        <label for="guest_capacity">Number of Guests: </label>
        <input
          type="number"
          name="guest_capacity"
          id="guest_capacity"
          required
		  onChange={onChangeHandler}
        />

        <label for="description">Description:</label>
        <textarea
          name="description"
          id="description"
          rows="4"
          required
		  onChange={onChangeHandler}
        ></textarea>

        <input type="submit" value="Create Event" />
      </form>
    </div>
  );
}

export default NewEvent;
