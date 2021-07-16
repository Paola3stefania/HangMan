import { goToRanking, goToGame, goToUsername } from "../router.js";
import { wrapper } from "../main.js";
import { username } from "../templates.js";
import { buttonPressed } from "../keyboard.js";
import { tecla } from "./play-game.js";

//register user its first screen, so it charges on load.
//? shows the view of the username

let usuario = {};

let usuarios = [
	{
		id: 0,
		name: "Marcel",
		score: 200,
		currentScore: 0,
		state: "playing",
		timePlayed: 97,
		gameLevel: "easy",
		numbersOfPlays: 2,
		numberOfErrors: 0,
	},
	{
		id: 0,
		name: "Tefa",
		score: 500,
		currentScore: 0,
		state: "game over",
		timePlayed: 37,
		gameLevel: "easy",
		numbersOfPlays: 3,
		numberOfErrors: 7,
	},
	{
		id: 0,
		name: "Pere",
		score: 100,
		currentScore: 0,
		state: "playinf",
		timePlayed: 130,
		gameLevel: "easy",
		numbersOfPlays: 0,
		numberOfErrors: 0,
	},
];

let usuariosHard = [
	{
		id: 0,
		name: "Carlos",
		score: 200,
		currentScore: 0,
		state: "playing",
		timePlayed: 97,
		gameLevel: "hard",
		numbersOfPlays: 2,
		numberOfErrors: 0,
	},
	{
		id: 0,
		name: "Manu",
		score: 500,
		currentScore: 0,
		state: "game over",
		timePlayed: 37,
		gameLevel: "hard",
		numbersOfPlays: 3,
		numberOfErrors: 7,
	},
	{
		id: 0,
		name: "Paris",
		score: 100,
		currentScore: 0,
		state: "playinf",
		timePlayed: 130,
		gameLevel: "hard",
		numbersOfPlays: 0,
		numberOfErrors: 0,
	},
];

let usuariosMedium = [
	{
		id: 0,
		name: "Romina",
		score: 200,
		currentScore: 0,
		state: "playing",
		timePlayed: 97,
		gameLevel: "medium",
		numbersOfPlays: 2,
		numberOfErrors: 0,
	},
	{
		id: 0,
		name: "Oliver",
		score: 500,
		currentScore: 0,
		state: "game over",
		timePlayed: 37,
		gameLevel: "medium",
		numbersOfPlays: 3,
		numberOfErrors: 7,
	},
	{
		id: 0,
		name: "Charlie",
		score: 100,
		currentScore: 0,
		state: "playinf",
		timePlayed: 130,
		gameLevel: "medium",
		numbersOfPlays: 0,
		numberOfErrors: 0,
	},
];

function userRegistration() {
	// seteo a cero todo cuando entro en registro

	console.log("entre aqui");
	console.log("soy el usuario", usuario);
	usuario = {
		id: 0,
		name: "",
		score: 0,
		currentScore: 0,
		state: "",
		timeStart: Date.now(),
		timeEnd: 0,
		timePlayed: 0,
		gameLevel: "",
		numbersOfPlays: 0,
		numberOfErrors: 0,
	};

	//borrar los que vienen de ranking tmb
	if (wrapper.firstChild != null) {
		if (
			document.getElementById("you-won") ||
			document.getElementById("game-over") ||
			document.getElementById("ranking")
		) {
			//es el reset
			document
				.querySelector(".main__link-username")
				.removeEventListener("click", goToUsername);
		} else if (document.getElementById("game-screen")) {
			document
				.querySelector(".main__link-username")
				.removeEventListener("click", goToUsername);
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
	document.querySelector("#username-form").addEventListener("submit", register);

	function register(event) {
		usuarios.push(usuario);
		goToGame(event);
	}
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

	const usernameInputError = document.getElementById("username-validation");
	const usernameInput = document.getElementById("username-value");
	document
		.getElementById("username-value")
		.addEventListener("change", function () {
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
		} else {
			usernameInputError.innerHTML = "Insert username";
			usernameInput.classList.add("invalid");
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

export { userRegistration, usuario, usuarios, usuariosHard, usuariosMedium };
