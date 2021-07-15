let nextWordCoundtdown = 5;

function nextPageTimer() {
  setInterval(function() {
    if(nextWordCoundtdown <= 0){
      document.getElementById("countdown-to-next").innerHTML = "Next!";
      // TODO - Show next word
    } else {
      document.getElementById("countdown-to-next").innerHTML = `${nextWordCoundtdown} seconds remaining`;
    }
    nextWordCoundtdown -= 1;
  }, 1000);
}

nextPageTimer()


let gameOverCountdown = 20;

// TODO - Change color when it's close to 0
function gameOverTimer() {
  setInterval(function() {
    if(gameOverCountdown <= 0){
      document.getElementById("countdown-to-end").innerHTML = "You lost!";
      // TODO - Show Game over template
    } else {
      document.getElementById("countdown-to-end").innerHTML = gameOverCountdown;
    }
    gameOverCountdown -= 1;
  }, 1000);
}

gameOverTimer()