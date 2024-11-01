import FileSaver from "file-saver";

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: string) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];

	if (randomPrompt === prompt) {
		return getRandomPrompt(prompt);
	}

	return randomPrompt;
}

export function downloadImage({ _id, photo }: { _id: string; photo: string }) {
	FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
