import { goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { youWon } from "../templates.js";
import { buttonPressed } from "../keyboard.js";
import { tecla } from "./play-game.js";
import { usuario } from "./register-user.js";
import { rankingEasy } from "./ranking-easy.js";
import { rankingMedium } from "./ranking-medium.js";
import { rankingHard } from "./ranking-hard.js";

function winner() {
	if (document.getElementById("game-screen")) {
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

	//clone the template of game-over
	wrapper.insertAdjacentHTML("beforeend", youWon);

	let winnerNode = document.getElementById("you-won").content;
	let copyNode = document.importNode(winnerNode, true);

	//delete de template from the html
	wrapper.innerHTML = "";

	wrapper.appendChild(copyNode);

	usuario.timeEnd = Date.now();
	let timePlayed = usuario.timeEnd - usuario.timeStart;
	usuario.timePlayed = Math.floor(timePlayed / 1000); //Segundos
	usuario.state = "won";

	//botones event listener: play again
	//*TODO startGame .. como la llamo Gonza??

	document
		.querySelector(".main__link-username")
		.addEventListener("click", goToUsername);

	printRanking();

	function printRanking() {
		let gameLevel = usuario.gameLevel;
		if (gameLevel === "easy") {
			rankingEasy();
		} else if (gameLevel === "medium") {
			rankingMedium();
		} else if (gameLevel === "hard") {
			rankingHard();
		}
	}

	//ranking funcion que vaya a cada vista segun la eleccion de easy medium hard
}

export { winner, usuario };
