import { apiOptions } from "../constants";

export function generateSpeech(body) {
    return new Promise(async function (resolve, reject) {
        await fetch("/api/generate-audio", {
            ...apiOptions,
            method: "POST",
            body,
        })
            .then((response) => response.json())
            .then(({ data }) => resolve(data))
            .catch((err) => reject(err));
    });
}
