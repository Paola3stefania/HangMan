import { goToUsername } from "../router.js";
import { goToGame } from "../router";

function rankingEasy() {
  //?remove event Listener before deleting de node

  let wrapper = document.getElementById("app");
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

export { rankingEasy };
