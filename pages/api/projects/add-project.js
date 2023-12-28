// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";

export default async function handler(req, res) {
    try {
        const docRef = await addDoc(collection(db, "projects"), req.body);
        res.status(200).json({ project: { ...req.body, id: docRef.id }, success: true })
    } catch (error) {

        res.status(400).json({ message: error.message, success: false })
    }

}
