let submittedData = []

export default async function handler(req, res)  {

	if (req.method === "POST"){
		const data = await req.body
		submittedData.push(data)
		res.status(201).json({ message: 'RSVP added successfully' });
	}

	else if (req.method === "GET"){
		res.status(201).json(submittedData)
	}

}