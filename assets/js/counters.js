/* COUNTERS FUNCTIONALITY */

/* NEXT WORD COUNTDOWN */

/* function nextPageTimer() {
	let nextWordCoundtdown = 5;
	setInterval(function () {
		if (nextWordCoundtdown <= 0) {
			document.getElementById("countdown-to-next").innerHTML = "Next!";
			// TODO - Show next word function
		} else {
			document.getElementById(
				"countdown-to-next"
			).innerHTML = `Prepare yourself: ${nextWordCoundtdown} seconds remaining`;
		}
		nextWordCoundtdown -= 1;
	}, 1000);
} */

nextPageTimer();

/* GAME OVER COUNTDOWN */

// TODO - Change color when it's close to 0
function gameOverTimer() {
	let gameOverCountdown = 20;
	setInterval(function () {
		if (gameOverCountdown <= 0) {
			document.getElementById("countdown-to-end").innerHTML = "You lost!";
			// goToGameOver(event)
		} else {
			document.getElementById("countdown-to-end").innerHTML = gameOverCountdown;
		}
		gameOverCountdown -= 1;
	}, 1000);
}

//gameOverTimer();

/* TOTAL PLAY TIME */

let timeStart;
let timeEnd;
let totalPlayedTime;

function startingTime() {
	timeStart = Date.now();
}

function endingTime() {
	timeEnd = Date.now();
	totalPlayedTime = timeEnd - timeStart;
}

startingTime();
endingTime();

export { totalPlayedTime, gameOverTimer, nextPageTimer };
