import { goToUsername, goToRanking } from "../router.js";
import { goToGame } from "../router.js";
import { wrapper } from "../main.js";
import { usuarios } from "./register-user.js";
import { ranking } from "../templates.js";

function rankingEasy() {
	if (document.getElementById("username")) {
		console.log("borre event listener de usuario");
		document
			.querySelector("#username-form")
			.removeEventListener("submit", goToGame);
		document
			.getElementById("link-ranking")
			.removeEventListener("click", goToRanking);
	}

	//make sure that the page its empty before doing nothing
	wrapper.innerHTML = "";

	//clone the template of ranking
	wrapper.insertAdjacentHTML("beforeend", ranking);

	let rankingNode = document.getElementById("ranking").content;
	let copyNode = document.importNode(rankingNode, true);

	//delete de template from the html
	wrapper.innerHTML = "";

	wrapper.appendChild(copyNode);

	//botones event listener: username & start

	document
		.querySelector(".main__link-username")
		.addEventListener("click", goToUsername);

	document
		.querySelector(".main__link-start")
		.addEventListener("click", goToGame);

	document.getElementById("ranking-subtitle").innerHTML =
		"BEST PLAYERS - LEVEL EASY";
	rankingOrder();
}

let superArray = usuarios;

function rankingOrder() {
	superArray = superArray.sort(function (a, b) {
		//All this function orders the superarray comparing one element with the others
		if (a.score > b.score) {
			return -1;
		}
		if (a.score < b.score) {
			return 1;
		} else {
			return 0;
		}
	});
	//muestro solo los primeros 5 usuarios
	for (let i = 0; i < 5; i++) {
		//Now we want for each of the objects inside the array to print a message in the list
		let rankingList = document.querySelector(".main__container-ranking ol"); //List selected
		let myScore = document.createElement("li");
		myScore.innerHTML = `${superArray[i].name} - ${superArray[i].timePlayed} seconds - ${superArray[i].score} points`;
		rankingList.appendChild(myScore); //We add the new li to the ordered ranking list
		console.log(rankingList);
		console.log(myScore);
	}
}

//finalFunction();

export { rankingEasy };
