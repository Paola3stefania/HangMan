import { goToUsername } from "../router.js";
import { goToGame } from "../router.js";
import { wrapper } from "../main.js";
import { usuario } from "./register-user.js";

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

//Examples as if there were previous game records
let superArray = [
  { id: 0, name: "Marcel", score: 200, timePlayed: 97, gameLevel: "easy" },
  { id: 0, name: "Tefa", score: 500, timePlayed: 37, gameLevel: "easy" },
  { id: 0, name: "Pere", score: 100, timePlayed: 130, gameLevel: "easy" },
];
//New username example
let usuarioB = {
  id: 0,
  name: "Carlos",
  score: 250,
  state: "",
  timePlayed: 32,
  gameLevel: "easy",
};

function finalFunction() {
  superArray.push(usuarioB); //In the final function (whenever the game ends), the username is pushed to the superarray
}

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
  console.log(superArray);
  for (let i = 0; i < superArray.length; i++) {
    //Now we want for each of the objects inside the array to print a message in the list
    let rankingList = document.querySelector(".main__container-ranking ol"); //List selected
    let myScore = document.createElement("li");
    myScore.innerHTML = `${superArray[i].name} - ${superArray[i].timePlayed} seconds - ${superArray[i].score} points`;
    rankingList.appendChild(myScore); //We add the new li to the ordered ranking list
    console.log(rankingList);
    console.log(myScore);
  }
}

finalFunction();
//rankingOrder();

export { rankingEasy };
