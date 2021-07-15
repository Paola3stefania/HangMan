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

function finalFunction(){
  let rankingList = document.querySelectorAll(".main__container-ranking li");
  let myScore = document.createElement("li");
  newScore.innerHTML = usuario.name + " " + "-" + " " + usuario.timePlayed + " " + "-" + " " + usuario.score;
  rankingList.appendChild(myScore);
  myRanking(myScore);
}

function myRanking(myScore) {
  let rankingList = document.querySelectorAll(".main__container-ranking li");
  //console.log(rankingList);
  for (i = 0; i < rankingList.length; i++){
    let otherScore = rankingList[i].substring(rankingList[i].lastIndexOf(" "), rankingList[i].length);
    console.log(rankingList[i].lastIndexOf(" "))
    console.log(rankingList[i].substring(rankingList[i].lastIndexOf(" "), rankingList[i].length););
    if (usuario.score > otherScore){
      
    }
  }
}

export { rankingEasy };
