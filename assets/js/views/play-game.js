import { goToUsername } from "../router.js";
import { wrapper } from "../main";

function playGame() {
  //?remove event Listener before deleting de node
  document.querySelector("link_start").removeEventListener("click", startGame);
  document.querySelector("link_ranking").removeEventListener("click", ranking);

  //make sure that the page its empty before doing nothing
  wrapper.innerHTML = "";

  //clone the template of game
  wrapper.insertAdjacentHTML("beforeend", game);

  let gameNode = document.getElementById("game-screen").content;
  let copyNode = document.importNode(gameNode, true);

  //delete de template from the html
  wrapper.innerHTML = "";

  wrapper.appendChild(copyNode);

  //botones event listener: play again
  //*TODO startGame .. como la llamo Gonza??

  document
    .querySelector(".main__link-username")
    .addEventListener("click", goToUsername);
  //TODO addEventListener de PAUSE?

  //ranking funcion que vaya a cada vista segun la eleccion de easy medium hard
}

export { playGame };
