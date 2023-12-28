import { apiOptions } from "../../constants";
// import * as cloudinary from 'cloudinary';

async function blobToBase64(blob, callback) {
  const base64 = Buffer.from(await blob.arrayBuffer()).toString('base64');
  callback(base64);
}

// const cloud_name = process.env.CLOUD_NAME;
// const api_key = process.env.API_KEY;
// const api_secret = process.env.API_SECRET;
// cloudinary.v2.config({
//   cloud_name,
//   api_key,
//   api_secret,
// });

// const options = {
//   use_filename: true,
//   unique_filename: false,
//   overwrite: true,
// };


export function generateSpeech(body) {
  return new Promise(async function (resolve, reject) {
    await fetch("https://api.genny.lovo.ai/api/v1/tts/sync", {
      ...apiOptions,
      method: "POST",
      body,
    })
      .then((response) => response.json())
      .then(async data => {
        const blob = await fetch(data?.data?.[0]?.urls?.[0]).then(r => r.blob());
        await blobToBase64(blob, async (base64) => {
          resolve({ ...data?.data?.[0], urls: [`data:audio/mpeg;base64,${base64}`] });
          // const result = await cloudinary.uploader.upload(`data:audio/mpeg;base64,${base64}`, options); // Using 'any' to bypass TypeScript error
          // const secureURL = result.secure_url;
          // console.log(secureURL);
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
