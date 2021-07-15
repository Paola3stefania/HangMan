//*TODO import {templateUsername} from "";

//*TODO import {startGame} from "play-game.js";


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
//*TODO <template id=???></template> -- username

function userRegistration(){

    let wrapper=document.getElementById("app");
    //make sure that the page its empty before doing nothing
    wrapper.innerHTML="";

    //clone the template of username registration
    wrapper.insertAdjacentHTML("beforeend", templateUsername);

	let usernameNode = document.getElementById("username").content;
	let copyNode = document.importNode(usernameNode, true);

    //delete de template from the html 
    wrapper.innerHTML="";

	wrapper.appendChild(copyNode);

    //botones event listener: start & ranking
    //*TODO startGame .. como la llamo Gonza??

	document.querySelector("link_start").addEventListener("click", startGame);
    document.querySelector("link_ranking").addEventListener("click", ranking);

    //ranking funcion que vaya a cada vista segun la eleccion de easy medium hard



}


export { userRegistration, usuario };
