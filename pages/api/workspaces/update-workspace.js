// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";

export default async function handler(req, res) {
    try {
        await updateDoc(doc(db, "workspaces", req.query.id), req.body);
        res.status(200).json({ message: "Updated Successfully", success: true })
    } catch (error) {

        res.status(400).json({ message: error.message, success: false })
    }

}
