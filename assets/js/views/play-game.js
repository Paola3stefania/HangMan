import { goToGame, goToRanking, goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { game } from "../templates.js";
import { usuario } from "./register-user.js";

function playGame() {
	//?remove event Listener before deleting de node
	usuario.numbersOfPlays += 1;
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

	//TODO addEventListener de PAUSE?
	//ranking funcion que vaya a cada vista segun la eleccion de easy medium hard
}

export { playGame };
