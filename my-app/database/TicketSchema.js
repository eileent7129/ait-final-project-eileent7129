import mongoose from 'mongoose'
await mongoose.connect('mongodb//localhost/uni-ticket')
import User from './UserSchema'

const TicketSchema = new mongoose.Schema({
	user: {type: User, required: true},
	eventTitle: {type: String, required: true},
	date: {type: Date, required: true},
	startTime: {type: Date, required: true},
	endTime: {type: Date, required: true},
	price: {type: Number, required: true},
	address: {type: String, required: true},
	description: {type: String, required: true},
})

const Ticket = mongoose.model('Ticket', TicketSchema)
export default Ticket;