import { goToRanking, goToGame, goToUsername } from "../router.js";
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

//register user its first screen, so it charges on load.
//? shows the view of the username

function userRegistration() {
	if (wrapper.innerHTML != "") {
		document
			.querySelector(".main__link-username")
			.removeEventListener("click", goToUsername);
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
	document.getElementById("link-start").addEventListener("click", goToGame);
	document
		.getElementById("link-ranking")
		.addEventListener("click", goToRanking);

	document.getElementById("username-value").addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			e.preventDefault();
		}
	});

	//save the game level
	//usuario.gameLevel = document.getElementById("main__input-username").value;

	//validate name
	//*TODO maxlenght, just letters
	// necesito un campo de error tipo span para el USUARIO

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
				usernameInputError.innerHTML = "Hola " + usuario.name;
			} else {
				usernameInput.classList.add("invalid");
				usernameInputError.innerHTML = "Insert valid username";
			}
		});

	//*TODO validate user name
	//<input id="main__input-username" />;
}

export { userRegistration, usuario };
