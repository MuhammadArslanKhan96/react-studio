import { apiOptions } from "../constants";

export function generateSpeech(body) {
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
