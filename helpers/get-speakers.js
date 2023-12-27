import { apiOptions } from "../constants";

export const getSpeakers = () => {
    return new Promise(async (resolve, reject) => {
        await fetch("https://api.genny.lovo.ai/api/v1/speakers?sort=displayName%3A1", {
            ...apiOptions,
            method: "GET",
        })
            .then((response) => response.json())
            .then(({ data }) => {
                resolve(data.filter((a) => a.speakerStyles.filter((s) => !s.deprecated).length));
            })
            .catch((err) => reject(err));
    });
};
