import { goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { youWon } from "../templates.js";

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

	//botones event listener: play again
	//*TODO startGame .. como la llamo Gonza??

	document
		.querySelector(".main__link-username")
		.addEventListener("click", goToUsername);

	//ranking funcion que vaya a cada vista segun la eleccion de easy medium hard
}

export { winner };
