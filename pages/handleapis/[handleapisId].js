import { data } from "../Data";
export default function handler(req, res){
    const { handleapiId } = req.query;
    const comment = data.find((dat)=>dat.id === parseInt(handleapiId))
    res.status(200).json(comment)
}