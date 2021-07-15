import { userRegistration, usuario } from "./views/register-user.js";
import { endGame } from "./views/gameover.js";
import { playGame } from "./views/play-game.js";
import { rankingEasy } from "./views/ranking-easy.js";
import { winner } from "./views/winner.js";

//---------------------------------------------ROUTER--------------------------------------
function navigate() {
	if (
		location.hash === "#username" ||
		location.hash === "" ||
		location.hash === "#"
	) {
		userRegistration();
	} else if (location.hash === "#ranking-easy") {
		rankingEasy();
	} else if (location.hash === "#ranking-medium") {
		rankingMedium();
	} else if (location.hash === "#ranking-hard") {
		rankingHard();
	} else if (location.hash === "#game") {
		playGame();
	} else if (location.hash === "#game-over") {
		endGame();
	} else if (location.hash === "#you-won") {
		winner();
	}
}

//---------------------------------------------ROUTES--------------------------------------

function goToUsername() {
	window.location.hash = "";
}

function goToRanking(event) {
	event.preventDefault();
	let gameLevel = usuario.gameLevel;
	if (gameLevel === "easy") {
		window.location.hash = "ranking-easy";
	} else if (gameLevel === "medium") {
		window.location.hash = "ranking-medium";
	} else if (gameLevel === "hard") {
		window.location.hash = "ranking-hard";
	}
}

function goToGame(event) {
	event.preventDefault();
	window.location.hash = "game";
}

function goToGameOver(event) {
	event.preventDefault();
	window.location.hash = "game-over";
}

function goToWon(event) {
	event.preventDefault();
	window.location.hash = "you-won";
}

//---------------------------------------------EXPORT-----------------------------------------

export { navigate, goToGame, goToGameOver, goToWon, goToRanking, goToUsername };
