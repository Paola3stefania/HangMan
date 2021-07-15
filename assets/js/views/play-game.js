import { goToGame, goToRanking, goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { game } from "../templates.js";
import { usuario } from "./register-user.js";
import { buttonPressed, blockLetter } from "../keyboard.js";
import { getGroupOfWords, getRandomWord, displayWord } from "../word.js";

function playGame() {
	//numero de juegos
	usuario.numbersOfPlays += 1;
	//?remove event Listener before deleting de node

	console.log("usuario en play-game", usuario);

	if (document.getElementById("username")) {
		document
			.querySelector("#username-form")
			.removeEventListener("submit", goToGame);
		document
			.getElementById("link-ranking")
			.removeEventListener("click", goToRanking);
	} else if (document.getElementById("ranking")) {
		document
			.querySelector(".main__link-username")
			.removeEventListener("click", goToUsername);
	}

	//make sure that the page its empty before doing nothing
	wrapper.innerHTML = "";

	//clone the template of game
	wrapper.insertAdjacentHTML("beforeend", game);

	let gameNode = document.getElementById("game-screen").content;
	let copyNode = document.importNode(gameNode, true);

	//delete de template from the html
	wrapper.innerHTML = "";

	wrapper.appendChild(copyNode);

	//botones event listener: play again
	document
		.querySelector(".main__link-username")
		.addEventListener("click", goToUsername);

	//TODO header
	//UserName Header
	document.getElementById("username-display").innerHTML = usuario.name;

	//UserName Score

	//TODO Hint & Comodin
	document.getElementById("score-display").innerHTML = usuario.score;

	document.getElementById("easy-hint").innerHTML = "hint";

	//comodin muestra una letra en la palabra

	//TODO Palabra - set used true or false
	getGroupOfWords();
	getRandomWord();
	displayWord();

	//TODO - PALABRA
	/* KEYBOARD FUNCTIONALITY */

	const KEYS = document.querySelectorAll("[data-letter]"); // We select all elements by the attribute as a NodeList.

	KEYS.forEach((key) => {
		// Add an event listener for each key button
		key.addEventListener("click", buttonPressed);
	});

	/* We evaluate every keyboard event and, if it's a letter, we launch our functions: */
	document.addEventListener("keydown", (event) => {
		// ! CARE WITH ALT, TAB, ETC.
		let letter = event.key;
		let regExpTest = /[a-z]+/g;
		let indexWord;
		if (regExpTest.test(letter)) {
			indexWord = lookForLetter(letter);
		}
		let WORDELEMENTS = document.querySelectorAll("#display-word span");
		for (const x of indexWord) {
			WORDELEMENTS[x].innerHTML = letter;
		}
		blockLetter(letter); // We block a new interaction with the letter button
	});

	//TODO Puntuacion
	//TODO HangMan
	//TODO Display segun nivel
}

export { playGame };
