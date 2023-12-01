import mongoose, { model } from 'mongoose'
mongoose.connect('mongodb://localhost')

import argon2 from 'argon2'

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
})

const TicketSchema = new mongoose.Schema({
	user_guest: UserSchema,
	event_name: String,
	date: String,
	time: String,
	price: Number,
	address: String
})

const EventSchema = new mongoose.Schema({
	user_host: UserSchema, 
	event_title: String,
	date: String,
	time: String,
	price: Number,
	address: String,
	guest_capacity: Number,
})

mongoose.model('User', UserSchema)

// const User = mongoose.model('User', UserSchema)

// const new_user = new User({
// 	username: "eileent7129",
// 	password: await argon2.hash("12345@")
// })

// const saved_user = await new_user.save()
// console.log(saved_user)