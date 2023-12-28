// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {

        let users = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
        });
        res.status(200).json({ users, success: true })
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
