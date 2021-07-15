import { goToRanking, goToGame, goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { username } from "../templates.js";

//register user its first screen, so it charges on load.
//? shows the view of the username

let usuario = {
	/* id: 0,
	name: "",
	score: 0,
	state: "",
	timePlayed: 0,
	gameLevel: "",
	numbersOfPlays: 0, */
};

function userRegistration() {
	// seteo a cero todo cuando entro en registro

	console.log("entre aqui");
	usuario = {
		id: 0,
		name: "",
		score: 0,
		state: "",
		timePlayed: 0,
		gameLevel: "",
		numbersOfPlays: 0,
	};
	console.log(usuario);

	//borrar los que vienen de ranking tmb
	if (wrapper.firstChild != null) {
		if (
			document.getElementById("you-won") ||
			document.getElementById("game-over") ||
			document.getElementById("ranking") ||
			document.getElementById("game")
		) {
			document
				.querySelector(".main__link-username")
				.removeEventListener("click", goToUsername);
		}
		//make sure that the page its empty before doing nothing
		wrapper.innerHTML = "";
	}

	//insert the template HTML in the main.html div app
	let templateUsername = username;
	wrapper.insertAdjacentHTML("beforeend", templateUsername);

	//clone the template of username registration
	let usernameNode = document.getElementById("username").content;
	let copyNode = document.importNode(usernameNode, true);

	//delete de template from the html
	wrapper.innerHTML = "";

	// insert the Node of the username
	wrapper.appendChild(copyNode);

	//botones event listener: start & ranking
	document.querySelector("#username-form").addEventListener("submit", goToGame);
	document
		.getElementById("link-ranking")
		.addEventListener("click", showRanking);

	//DOnt want to Enter do something
	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			e.preventDefault();
		}
	});

	//validate name
	const usernameRegexp = /^[a-z0-9]+$/i;

	document
		.getElementById("username-value")
		.addEventListener("change", function () {
			const usernameInputError = document.getElementById("username-validation");
			const usernameInput = document.getElementById("username-value");

			const test = usernameRegexp.test(usernameInput.value);

			if (test) {
				usernameInput.classList.remove("invalid");
				usuario.name = usernameInput.value.toString();
				usernameInputError.innerHTML = "¡ Hola " + usuario.name + " !";
			} else {
				usernameInput.classList.add("invalid");
				usernameInputError.innerHTML = "Insert valid username";
			}
		});

	function showRanking(event) {
		if (usuario.name != "") {
			console.log(usuario.name);
			goToRanking(event);
		}
	}
	//sets the level property into the user
	let radioButtons = document.querySelectorAll('input[name="level"]');

	for (const btn of radioButtons) {
		btn.addEventListener("click", (e) => {
			usuario.gameLevel = e.target.value;
			console.log(usuario.gameLevel);
		});
	}
} //end UserRegistration

export { userRegistration, usuario };
