import {User} from "../../database/db";

export default async function handler(req, res) {
	console.log("inside usersApi");
  if (req.method === "POST") {
    const userData = req.body;
	console.log("Received user data:", userData);
    try {
		console.log("Post is working")

      const newUser = new User(userData);
      await newUser.save();
	  console.log("User added successfully");
      res.status(201).json({ message: "User added successfully" });
    } catch (error) {
      console.log("Error adding user: ", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log("Error fetching users: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
