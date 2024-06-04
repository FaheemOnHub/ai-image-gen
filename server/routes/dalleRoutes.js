import express from "express";
import * as dotenv from "dotenv";

import fetch from "node-fetch";
dotenv.config();
console.log(process.env.OPENAI_API_KEY);
const router = express.Router();
const url = "https://dalle.feiyuyu.net/v1/images/generations";
const apiKey = process.env.OPENAI_API_KEY; // Replace with your actual API key

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;
    res.json({ imageUrl });
    console.log("Image URL:", imageUrl);

    // Now store the image URL in a variable
    const imageVariable = imageUrl;

    // Print the variable to verify
    console.log("Stored Image URL:", imageVariable);

    // Optionally, you can download the image using the URL
    // and save it to the filesystem if needed
    // const imageResponse = await fetch(imageVariable);
    // const buffer = await imageResponse.buffer();
    // const fs = require('fs');
    // fs.writeFileSync('cute_cat.png', buffer);
    // console.log('Image downloaded and saved as cute_cat.png');
  } catch (error) {
    console.log(error);
  }
});

export default router;
