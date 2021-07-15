import { goToUsername } from "../router.js";
import { wrapper } from "../main.js";

function winner() {
	//?remove event Listener before deleting de node

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
