import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const { title, content } = req.body;

    const result = await db.collection("posts").insertOne({
      title,
      content,
      date: new Date().toISOString(),
    });

    res.status(201).json(result.ops[0]);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
