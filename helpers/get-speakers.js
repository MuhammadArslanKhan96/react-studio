export const getSpeakers = () => {
    return new Promise(async (resolve, reject) => {
        await fetch("/api/get-speakers")
            .then((response) => response.json())
            .then(({ data }) => {
                resolve(data);
            })
            .catch((err) => reject(err));
    });
};
