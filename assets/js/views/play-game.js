import {
	goToGame,
	goToGameOver,
	goToRanking,
	goToUsername,
	goToWon,
} from "../router.js";
import { wrapper } from "../main.js";
import { game } from "../templates.js";
import { usuario } from "./register-user.js";
import { buttonPressed, blockLetter } from "../keyboard.js";
import { displayWord, currentGroup } from "../word.js";
import { lookForLetter, showFirstLetter } from "../letter.js";

function playGame() {
	//numero de juegos

	usuario.numbersOfPlays += 1;
	//?remove event Listener before deleting de node

	console.log("usuario en play-game", usuario);

	if (document.getElementById("username")) {
		console.log("borre event listener de usuario");
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
	} else if (document.getElementById("game-screen")) {
		console.log("borre event listener de game screen");
		document
			.querySelector(".main__link-username")
			.removeEventListener("click", goToUsername);

		let KEYS = document.querySelectorAll("[data-letter]");
		KEYS.forEach((key) => {
			// Add an event listener for each key button
			key.removeEventListener("click", buttonPressed);
		});
		window.removeEventListener("keydown", tecla);
	}

	//make sure that the page its empty before doing nothing
	wrapper.innerHTML = "";

	/* We evaluate every keyboard event and, if it's a letter, we launch our functions: */
	window.addEventListener("keydown", tecla);

	if (usuario.numbersOfPlays == 5) {
		usuario.score = usuario.score + 250;
		goToWon();
	} else {
		//clone the template of game
		wrapper.insertAdjacentHTML("beforeend", game);

		let gameNode = document.getElementById("game-screen").content;
		let copyNode = document.importNode(gameNode, true);

		//delete de template from the html
		wrapper.innerHTML = "";

		wrapper.appendChild(copyNode);

		//botones event listener: play again: RESET
		document
			.querySelector(".main__link-username")
			.addEventListener("click", reset);

		function reset() {
			usuario.timeEnd = Date.now();

			let timePlayed = usuario.timeEnd - usuario.timeStart;
			usuario.timePlayed = Math.floor(timePlayed / 1000); //Segundos
			goToUsername();
		}

		//UserName Header
		document.getElementById("username-display").innerHTML = usuario.name;

		//UserName Score

		document.getElementById("score-display").innerHTML = usuario.currentScore;

		document.getElementById("score-display-total").innerHTML =
			"Total Score: " + usuario.score;

		if (usuario.gameLevel == "easy") {
			document.getElementById("easy-hint").innerHTML = "hint";
		} else if (usuario.gameLevel == "medium") {
			document.getElementById("easy-hint").innerHTML = "No hint in this level";
		} else if (usuario.gameLevel == "hard") {
			document.getElementById("easy-hint").innerHTML = "No hint in this level";
			document.querySelector("#help").innerHTML = "NO HELP";
			document.querySelector("#help").setAttribute("disabled", "disabled");
		}

		document.querySelector("#help").addEventListener("click", showFirstLetter);

		displayWord();

		let KEYS = document.querySelectorAll("[data-letter]"); // We select all elements by the attribute as a NodeList.
		KEYS.forEach((key) => {
			// Add an event listener for each key button
			key.addEventListener("click", buttonPressed);
		});
	}
}
function tecla(event) {
	console.log("estoy en funcion tecla");
	if (
		event.key == "Enter" ||
		event.key == "Control" ||
		event.key == "CapsLock" ||
		event.key == "Shift" ||
		event.key == " " ||
		event.key == "ñ"
	) {
		event.preventDefault();
	} else {
		blockLetter(event.key); // We block a new interaction with the letter button
		lookForLetter(event.key);
	}
}

export { playGame, tecla };
