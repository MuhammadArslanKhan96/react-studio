// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../constants/firebaseConfigs";



export default async function handler(req, res) {
    try {
        const docRef = doc(db, "users", req.body.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res.status(400).json({ message: "User already exists", success: false });
            return;
        }
        await addDoc(collection(db, 'workspaces'), {
            name: "",
            members: [
                {
                    email: req.body.email,
                    accepted: true,
                    role: "Owner",
                }
            ]
        });
        await setDoc(doc(db, "users", req.body.email), { ...req.body, members: [], plan: "Free", slug: req.body.displayName.toLowerCase().split(' ').join('-') });
        res.status(200).json({ user: req.body, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
}
