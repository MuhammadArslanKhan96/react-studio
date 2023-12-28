import { apiOptions } from "../../constants";

export function generateSpeech(body) {
    console.log(body);
    return new Promise(async function (resolve, reject) {
        await fetch("https://api.genny.lovo.ai/api/v1/tts/sync", {
            ...apiOptions,
            method: "POST",
            body,
        })
            .then((response) => response.json())
            .then(resolve)
            .catch((err) => reject(err));
    });
}

export default async function handler(req, res) {
    try {
        const data = await generateSpeech(JSON.stringify(req.body));
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
