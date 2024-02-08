import mongoose from 'mongoose'
import './db'

const UserSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
})

const User = mongoose.model('User', UserSchema)

// const newUser = new User({
// 	first_name: "first name",
// 	last_name: "last name",
// 	email: "test@example.com",
// 	password: "test123"
// })

// const savedUser = await newUser.save()
// console.log("new user saved to User model: ", savedUser)
export default User;