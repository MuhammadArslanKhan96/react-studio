// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {
        const docRef = doc(db, "users", req.query.email);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            res.status(400).json({ message: "Invalid email or password", success: false });
            return;
        }
        const user = docSnap.data();

        res.status(200).json({ user, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
