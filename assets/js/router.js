import { userRegistration } from "./views/register-user";
import { endGame } from "./views/gameover";
import { playGame } from "./views/play-game";
import { rankingEasy } from "./views/ranking-easy";

//---------------------------------------------ROUTER--------------------------------------
function navigate() {
  if (
    location.hash === "#username" ||
    location.hash === "" ||
    location.hash === "#"
  ) {
    userRegistration();
  } else if (location.hash === "#ranking") {
  } else if (location.hash === "#ranking") {
    rankingEasy();
  } else if (location.hash === "#game") {
    playGame();
  } else if (location.hash === "#game-over") {
    endGame();
  } else if (location.hash === "#you-won") {
  }
}

//---------------------------------------------ROUTES--------------------------------------

function goToUsername() {
  window.location.hash = "";
}

function goToRanking(event) {
  event.preventDefault();
  window.location.hash = "ranking";
}

function goToGame(event) {
  event.preventDefault();
  window.location.hash = "game";
  //!Timer function
}

function goToGameOver(event) {
  event.preventDefault();
  window.location.hash = "game_over";
}

function goToWon(event) {
  event.preventDefault();
  window.location.hash = "you_won";
}

//---------------------------------------------EXPORT-----------------------------------------

export { navigate, goToGame, goToGameOver, goToWon, goToRanking, goToUsername };
