//import './db.mjs'
import express from "express";
//import mongoose from 'mongoose'
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.set("view engine", "hbs");
// app.use(express.urlencoded());

// //react app
app.use(express.static(path.join(__dirname, "../client/build")));

// //all requets go to React app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.get('/', (req, res) => {
	res.send('Hello from our server!')
})

//const User = mongoose.model('User');


// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get('/profile', (req, res) => {
// 	res.render("profile", { events: renderedEvents, tickets: renderedTickets })
// })

//registration
// app.get('/register', (req,res) => {
// 	res.render('register')
// })

// app.post('/', async (req,res) => {
// 	const foundUser =  await User.findOne({username: req.body.username})
// 	console.log("foundUser: ", foundUser)

// 	if (foundUser) {
// 		res.render('register', {error: "duplicate user!"})
// 	}
// 	else {
// 		try {
// 			const newUser = new User({
// 				username: req.body.username,
// 				password: await argon2.hash(req.body.password)
// 			})
// 			const savedUser = await newUser.save()
// 			console.log("savedUser: ", savedUser)
// 			res.redirect('/login')

// 		}catch(e){
// 			res.render('register', {error: 'unable to register!'})
// 		}
// 	}

// })

// //login
// app.get('/login', async (req, res) => {
// 	const users = await User.find()
// 	console.log("All users: ", users)
// 	res.render('login')
// })

// app.post('/login', async (req,res) => {
// 	const foundUser = await User.findOne({
// 			username: req.body.username
// 		})
// 	console.log("foundUser: " , foundUser)

// 	if(foundUser) {
// 		const passwordMatch = await argon2.verify(foundUser.password, req.body.password)

// 		if (passwordMatch) {
// 			console.log(foundUser.username, " is logged in!")
// 			res.redirect('/')
// 		}
// 		else {
// 			console.log('username or password is incorrect')
// 			res.redirect('/login')
// 		}
// 	}
// 	else {
// 		res.redirect('/register')
// 	}

// })

// app.get("/events", (req,res) => {
// 	res.render("events", {events: renderedEvents});
// })

// app.get("/create-new-event", (req, res) => {
//   res.render("create_event");
// });

// app.post("/create-new-event", (req, res) => {
//   const newEvent = req.body;
//   renderedEvents.push(newEvent);
//   console.log(renderedEvents);
//   res.redirect("/events");
// });

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
