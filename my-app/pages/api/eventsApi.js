import {Event} from "../../database/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const events = await Event.find();
      res.status(201).json(events);

    } catch (error) {
		console.log("Error fetching users: ", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
   
  } else if (req.method === "POST") {
	console.log("POST method for api/events working")
    const formData = req.body;
    try {
      const newEvent = new Event(formData);
      await newEvent.save(formData);

      res.status(201).json({ message: "Event added successfully" });
    } catch (error) {
      console.log("Error adding event: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(201).json({ message: "Event added successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
