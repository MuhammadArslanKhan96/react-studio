// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {

        let workspaces = [];
        const q = query(collection(db, "workspaces"), where("members", "array-contains", {
            email: req.query.email,
            accepted: false,
            role: "Member",
        }));
        const querySnapshot = await getDocs(q);
        (querySnapshot).forEach(async (document) => {
            workspaces.push({ ...document.data(), members: filtermembers, id: document.id });
        });
        res.status(200).json({ pending: workspaces, success: true })
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
