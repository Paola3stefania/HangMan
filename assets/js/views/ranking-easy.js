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

function finalFunction() {
  let rankingList = document.querySelectorAll(".main__container-ranking li");
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

function myRanking(myScore) {
  let rankingList = document.querySelectorAll(".main__container-ranking li");
  //I need now to iterate across the ranking list and compare the scores
  for (i = 0; i < rankingList.length; i++) {
    let otherScore = rankingList[i].substring(
      rankingList[i].lastIndexOf(" "),
      rankingList[i].length
    ); //I am getting the score part from the html text of the li inside the ranking list
    console.log(rankingList[i].lastIndexOf(" "));
    console.log(
      rankingList[i].substring(
        rankingList[i].lastIndexOf(" "),
        rankingList[i].length
      )
    );
    if (usuario.score > otherScore) {
      //If the score is bigger than the other li, add one to its position
    }
  }
}

export { rankingEasy };
