import { apiOptions } from "../../constants";
import fs from 'fs';

const genRand = (len) => {
  return Math.random().toString(36).substring(2, len + 2);
}

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
        const pathname = `/audio/${genRand(8)}.mp3`;
        const blob = await fetch(data?.data?.[0]?.urls?.[0]).then(r => r.blob());
        await blobToBase64(blob, (base64) => {
          fs.writeFile('public' + pathname, base64, 'base64', function (err) {
            if (err) {
              console.log(err);
              throw new Error(err);
            }
          });
        });
        resolve({ ...data?.data?.[0], urls: [pathname] });
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
