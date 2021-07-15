//*TODO import {templateUsername} from "";

import { username } from "../templates";

//*TODO import {startGame, ranking} from "router.js";


let usuario={
    id:0,
    name:"",
    score:0,
    state:"",
    timePlayed=0,
    gameLevel=""
}

//register user its first screen, so it charges on load.
//? shows the view of the username

function userRegistration(){

    let wrapper=document.getElementById("app");
    //make sure that the page its empty before doing nothing
    wrapper.innerHTML="";

    //insert the template HTML in the main.html div app
    let templateUsername= document.getElementById("username");
    wrapper.insertAdjacentHTML("beforeend", templateUsername);

    //clone the template of username registration
	let usernameNode = document.getElementById("username").content;
	let copyNode = document.importNode(usernameNode, true);

    //delete de template from the html 
    wrapper.innerHTML="";

    // insert the Node of the username
	wrapper.appendChild(copyNode);

    //botones event listener: start & ranking
    //*TODO startGame .. como la llamo Gonza? en el router ambas funciones?

	document.querySelector("link_start").addEventListener("click", startGame);
    document.querySelector("link_ranking").addEventListener("click", ranking);

    //ranking funcion que vaya a cada vista segun la eleccion de easy medium hard

    usuario.gameLevel=document.getElementById("main__input-username").value;

    //validate name
    //*TODO maxlenght, just letters
    // necesito un campo de error tipo span para el USUARIO
    
    usuario.name=getElementById("main__input-username").value;

    const usernameInput = getElementById("main__input-username");
	const usernameInputError = document.querySelector("");
    const usernameRegexp= /^[a-z0-9]+$/i;


	username.addEventListener("change", function () {
		const test = usernameRegexp.test(usernameInput.value);

		if (test) {
			usernameInputError.innerHTML = "";
			username.classList.add("valid");
			username.classList.remove("invalid");
		} else {
			username.classList.remove("valid");
			username.classList.add("invalid");
			usernameInputError.innerHTML = "Insert valid email";
		}
	});





//*TODO validate user name
<input id="main__input-username" />

}


export { userRegistration, usuario };
