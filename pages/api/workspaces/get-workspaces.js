// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {

        let workspaces = [];
        const q = query(collection(db, "workspaces"), where("members", "array-contains", {
            email: req.query.email,
            accepted: true,
            role: "Owner",
        }));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (document) => {
            if (document.exists()) {
                const members = document.data().members;
                let filtermembers = [];
                await members.forEach(async member => {
                    const docRef = doc(db, "users", member?.email);
                    const user = (await getDoc(docRef)).data() || {};
                    filtermembers.push({ ...member, ...user });
                });
                workspaces.push({ ...document.data(), members: filtermembers, id: document.id });
            }
        });
        const q2 = query(collection(db, "workspaces"), where("members", "array-contains", {
            email: req.query.email,
            accepted: true,
            role: "Member",
        }));

        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach(async (document) => {
            if (document.exists()) {
                const members = document.data().members;
                let filtermembers = [];
                await members.forEach(async member => {
                    const docRef = doc(db, "users", member?.email);
                    const user = (await getDoc(docRef)).data() || {};
                    filtermembers.push({ ...member, ...user });
                });
                workspaces.push({ ...document.data(), members: filtermembers, id: document.id });
            }
        });
        res.status(200).json({ workspaces, success: true })
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
