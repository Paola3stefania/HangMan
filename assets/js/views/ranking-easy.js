import { goToUsername } from "../router.js";
import { goToGame } from "../router";
import { wrapper } from "../main";
import { usuario } from "./register-user";

function rankingEasy() {
  //?remove event Listener before deleting de node

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
}
//ranking funcion que vaya a cada vista segun la eleccion de easy medium hard
let superObject = [];
function finalFunction() {
  superObject.push(usuario);
}

function rankingOrder() {
  superObject.sort(function (a, b) {
    if (a.score > b.score) {
      return 1;
    }
    if (a.score < b.score) {
      return -1;
    }
    return 0;
  });
  for (el in superObject) {
    let myScore = document.createElement("li");
    newScore.innerHTML =
      usuario.name +
      " " +
      "-" +
      " " +
      usuario.timePlayed +
      " " +
      "-" +
      " " +
      usuario.score; //We create a string that stores old values from old usernames
    rankingList.appendChild(myScore); //We add the new li to the ordered ranking list
    myRanking(myScore);
  }
}

export { rankingEasy };
