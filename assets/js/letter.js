/* IMPORTS */

import { playGame } from "./views/play-game.js";
import { currentWord } from "./word.js";

let currentCorrect = 0; // lo tiene que hacer el display word
let currentLength;

let wordPlaying;
let index = [];

function lookForLetter(letter) {
	if (currentCorrect === currentLength) {
		console.log(currentWord + " guessed");
		currentCorrect = 0;
		currentErrors = 0;

		playGame();
		//go to next word
	} else {
		currentLength = currentWord.length;
		wordPlaying = currentWord;
		let correct = 0;
		index = [];

		for (let i = 0; i < wordPlaying.length; i++) {
			if (wordPlaying[i] == letter) {
				correct += 1;
				//wordPlaying = wordPlaying.replace(letter, ""); //le voy sacando la letra que falta
				index.push(i);
			}
		}
		let result =
			correct > 0 ? correctLetter(letter, correct) : wrongLetter(letter);
	}
}

// FUNCIONALIDADES:

function correctLetter(letter, correct) {
	currentCorrect += correct;
	console.log("correct " + letter);
	console.log("correct " + currentCorrect);

	let WORDELEMENTS = document.querySelectorAll("#display-word span");
	console.log("holasoy index", index);
	if (index.length > 0) {
		for (const x of index) {
			WORDELEMENTS[x].innerHTML = letter;
		}
	} else {
		WORDELEMENTS[index[0]].innerHTML = letter;
	}
}

let currentErrors = 0;
function wrongLetter(letter) {
	currentErrors += 1;
	console.log("wrong " + letter);
	console.log("error " + currentErrors);
}

export { lookForLetter };
