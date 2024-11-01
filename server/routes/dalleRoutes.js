import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
	res.send(
		"Hello, from DALL-E! This API provides image generation capabilities using OpenAI's DALL-E model. You can use the '/generate' endpoint to request an image based on your provided prompt."
	);
});

router.route("/").post(async (req, res) => {
	try {
		const { prompt } = req.body;

		const aiResponse = await openai.images.generate({
			prompt: prompt,
			n: 1,
			size: "1024x1024",
			response_format: "b64_json",
		});

		const image = aiResponse.data[0].b64_json;

		res.status(200).json({ photo: image });
	} catch (error) {
		console.log("dalleRoutes error---", error);
		res.status(500).send(error?.response.data.error.message);
	}
});

export default router;
