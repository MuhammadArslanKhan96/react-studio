import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { apiOptions } from "../../constants";
import { db } from "../../constants/firebaseConfigs";
const getSpeakers = async (original) => {
    if (original) {
        const originalSpeakers = await new Promise(async (resolve, reject) => {
            await fetch("https://api.genny.lovo.ai/api/v1/speakers?sort=displayName%3A1", {
                ...apiOptions,
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    resolve(data?.data?.filter((a) => a.speakerStyles.filter((s) => !s.deprecated).length) || []);
                })
                .catch((err) => {
                    reject(err);
                });
        });

        originalSpeakers.forEach(async (speaker) => {
            const docsRef = doc(db, "speakers", speaker.id);
            await setDoc(docsRef, { ...speaker, bookmarks: [] });
        });



        let speakers = [];
        const docsRef = collection(db, "speakers");
        const docs = await getDocs(docsRef);
        if (docs.empty) {
            return [];
        }
        docs.forEach((doc) => {
            speakers.push({ ...doc.data(), id: doc.id });
        });

        return speakers;
    } else {
        let speakers = [];
        const docsRef = collection(db, "speakers");
        const docs = await getDocs(docsRef);
        if (docs.empty) {
            return [];
        }
        docs.forEach((doc) => {
            speakers.push({ ...doc.data(), id: doc.id });
        });

        return speakers;
    }
};

export default async function handler(_req, res) {
    try {
        const speakers = await getSpeakers(_req.query.original);
        res.status(200).json({ data: speakers });
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
