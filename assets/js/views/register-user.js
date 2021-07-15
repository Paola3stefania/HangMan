import { goToRanking, goToGame } from "../router.js";
import { wrapper } from "../main.js";
import { username } from "../templates.js";

let usuario = {
	id: 0,
	name: "",
	score: 0,
	state: "",
	timePlayed: 0,
	gameLevel: "",
};
console.log("hola");
//register user its first screen, so it charges on load.
//? shows the view of the username

function userRegistration() {
	//make sure that the page its empty before doing nothing
	wrapper.innerHTML = "";

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
	document.getElementById("link-start").addEventListener("click", goToGame);
	document
		.getElementById("link-ranking")
		.addEventListener("click", goToRanking);

	//save the game level
	//usuario.gameLevel = document.getElementById("main__input-username").value;

	//validate name
	//*TODO maxlenght, just letters
	// necesito un campo de error tipo span para el USUARIO

	const usernameRegexp = /^[a-z0-9]+$/i;
	const usernameInput = document.getElementById("username-value");

	usernameInput.addEventListener("change", function () {
		const usernameInputError = document.getElementById("username-validation");
		const test = usernameRegexp.test(usernameInput.value);

		if (test) {
			usernameInputError.innerHTML = "";

			usernameInput.classList.remove("invalid");
			usuario.name = usernameInput.value;
		} else {
			usernameInput.classList.add("invalid");
			usernameInputError.innerHTML = "Insert valid username";
		}
	});

	//*TODO validate user name
	//<input id="main__input-username" />;
}

export { userRegistration, usuario };
