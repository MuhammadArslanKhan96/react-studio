// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {

        let projects = [];
        const q = query(collection(db, "members"), where("userId", "==", req.query.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            projects.push({ ...doc.data(), id: doc.id });
        });
        res.status(200).json({ projects, success: true })
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
