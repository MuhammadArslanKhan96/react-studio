// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {
        const docRef = doc(db, "projects", req.query.id);
        await deleteDoc(docRef);
        res.status(200).json({ message: "Deleted Successfully!", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
