import mongoose from 'mongoose'
import './db'
import User from './UserSchema'

const EventSchema = new mongoose.Schema({
	event_title: {type: String, required: true},
	date: {type: Date, required: true},
	start_time: {type: Date, required: true},
	end_time: {type: Date, required: true},
	price: {type: Number, required: true},
	address: {type: String, required: true},
	guest_capacity: {type: Number, required: true},
	description: {type: String, required: true}
})

const Event = mongoose.model('Event', EventSchema)

// const newEvent = new mongoose.Schema({
// 	event_title: "Test Event",
// 	date: new Date(),
// 	start_time: new Date(),
// 	end_time: new Date(),
// 	price: 10,
// 	address: "test address",
// 	guest_capacity: 100,
// 	description: "test description"
// })

// const savedEvent = await newEvent.save()
// console.log("new event saved to Event model: ", savedEvent)

export default Event;