import { apiOptions } from "../../constants";
const getSpeakers = () => {
    return new Promise(async (resolve, reject) => {
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
};

export default async function handler(_req, res) {
    try {
        const speakers = await getSpeakers();
        res.status(200).json({ data: speakers });
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
