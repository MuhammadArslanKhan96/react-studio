import { apiOptions } from "../../constants";

async function blobToBase64(blob, callback) {
  const base64 = Buffer.from(await blob.arrayBuffer()).toString('base64');
  callback(base64);
}

export function generateSpeech(body) {
  return new Promise(async function (resolve, reject) {
    await fetch("https://api.genny.lovo.ai/api/v1/tts/sync", {
      ...apiOptions,
      method: "POST",
      body,
    })
      .then((response) => response.json())
      .then(async data => {
        console.log(data)
        const blob = await fetch(data?.data?.[0]?.urls?.[0]).then(r => r.blob());
        await blobToBase64(blob, async (base64) => {
          resolve({ ...data?.data?.[0], urls: [`data:audio/mpeg;base64,${base64}`] });
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
