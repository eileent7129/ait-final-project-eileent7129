import mongoose from "mongoose";


// mongoose.connect('mongodb+srv://eat7129:SXLs2OfTMJ39FnPo@uniticket.kx6nuoi.mongodb.net/');
mongoose.connect('mongodb+srv://eat7129:SXLs2OfTMJ39FnPo@uniticket.kx6nuoi.mongodb.net/');


console.log("inside db")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

const EventSchema = new mongoose.Schema({
  event_title: { type: String, required: true },
  date: { type: Date, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  guest_capacity: { type: Number, required: true },
  description: { type: String, required: true },
});

const Event = mongoose.model("Event", EventSchema);

// const newUser = new User({
//   first_name: "first name",
//   last_name: "last name",
//   email: "test@example.com",
//   password: "test123",
// });

// await newUser.save();

// const newEvent = new mongoose.Schema({
//   event_title: "Test Event",
//   date: new Date(),
//   start_time: new Date(),
//   end_time: new Date(),
//   price: 10,
//   address: "test address",
//   guest_capacity: 100,
//   description: "test description",
// });

// await newEvent.save();

export { User, Event, db };
