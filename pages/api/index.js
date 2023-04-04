import { data } from "../Data";

export default function handler(req, res) {
  if(req.method === "GET"){
  res.status(200).json(data);
  } else if(req.method === "POST"){
    const comment = req.body.comment
    const newcomment = {
      id: Date .now(), 
      name:comment.name,
      email:comment.email,
      phone:comment.phone,
    }
    data.push(newcomment)
    res.status(201).json(newcomment)
  }
}
