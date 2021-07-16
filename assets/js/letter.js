/* IMPORTS */

import { playGame } from "./views/play-game.js";
import { currentWord } from "./word.js";
import { goToGameOver } from "./router.js";
import { blockLetter } from "./keyboard.js";
import { usuario } from "./views/register-user.js";

let currentCorrect = 0; // lo tiene que hacer el display word
let currentLength;
let currentScore = 0;
let wordPlaying;
let index = [];

function adivinado() {
	let nextWordCoundtdown = 5;
	setInterval(function () {
		if (nextWordCoundtdown <= 0) {
			document.getElementById("countdown-to-next").innerHTML = "";
		} else {
			document.getElementById(
				"countdown-to-next"
			).innerHTML = `Prepare yourself: ${nextWordCoundtdown} seconds remaining`;
		}
		nextWordCoundtdown -= 1;
	}, 1000);

	nextScreen();
}

function nextScreen() {
	console.log(currentWord + " guessed");
	currentCorrect = 0;
	currentErrors = 0;
	currentScore = currentScore + 100;

	var timeoutNow = setTimeout(playGame, 6000);

	//por ganar sin errar bonus !
	if (currentErrors == 0) {
		currentScore = currentScore + 50;
	}
	usuario.score = currentScore;

	//go to next word
}
function lookForLetter(letter) {
	currentLength = currentWord.length;
	//adivino la palabra
	if (currentCorrect == currentLength) {
		adivinado();
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

function showFirstLetter() {
	let letter = currentWord[0];
	lookForLetter(letter);
	document.querySelector("#help").setAttribute("disabled", "disabled");
	blockLetter(letter);
	wordPlaying = currentWord.substr[1];
	console.log(wordPlaying);
}

function correctLetter(letter, correct) {
	currentCorrect += correct;
	console.log("correct " + letter);
	console.log("correct " + currentCorrect);
	currentScore = currentScore + 20;
	document.getElementById("score-display").innerHTML = currentScore;

	let WORDELEMENTS = document.querySelectorAll("#display-word span");
	console.log("hola soy index", index);
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
	currentScore = currentScore - 10;
	document.getElementById("score-display").innerHTML = currentScore;

	document
		.getElementById("hangman")
		.setAttribute("src", "assets/img/hangman-" + currentErrors + ".jpg");
	if (currentErrors == 7) {
		usuario.currentScore = currentScore;
		currentErrors = 0;
		currentScore = 0;
		console.log(usuario);
		goToGameOver();
	}
}

export { lookForLetter, showFirstLetter, currentScore, usuario };
