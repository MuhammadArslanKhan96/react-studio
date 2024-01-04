import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { apiOptions } from "../../constants";
import { storage } from '../../constants/firebaseConfigs';
import { v4 } from "uuid";

export function generateSpeech(body) {
  return new Promise(async function (resolve, reject) {
    await fetch("https://api.genny.lovo.ai/api/v1/tts/sync", {
      ...apiOptions,
      method: "POST",
      body,
    })
      .then((response) => response.json())
      .then(async data => {
        let originalData = data;
        while (originalData.status === 'in_progress') {
          setTimeout(() => {
            (async () => {
              await fetch("https://api.genny.lovo.ai/api/v1/tts/" + data.id, {
                ...apiOptions,
                method: "GET",
              })
                .then((response) => response.json())
                .then(async data2 => {
                  originalData = data2
                })
            })()
          }, 4000);
        }
        const blob = await fetch(data?.data?.[0]?.urls?.[0]).then(r => r.blob());
        const storageRef = ref(storage, `speeches/${v4()}.mp3`);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, blob).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(url => {
            resolve({ ...data?.data?.[0], urls: [url], id: v4() });
          });
        });
      })
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
