import { userRegistration } from "./views/register-user";

//---------------------------------------------ROUTER--------------------------------------
function navigate() {
  if (
    location.hash === "#username" ||
    location.hash === "" ||
    location.hash === "#"
  ) {
    userRegistration();
  } else if (location.hash === "#ranking") {
    buy();
  } else if (location.hash === "#ranking") {
  } else if (location.hash === "#game") {
  } else if (location.hash === "#game-over") {
  } else if (location.hash === "#you-lost") {
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

function goToLost(event) {
  event.preventDefault();
  window.location.hash = "you_lost";
}

//---------------------------------------------EXPORT--------------------------------------

export {
  navigate,
  goToGame,
  goToGameOver,
  goToLost,
  goToRanking,
  goToUsername,
};
