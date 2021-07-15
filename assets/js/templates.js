// --------------------------------------------USERNAME SCREEN----------------------------------------
let username = `
<template id="username">
    <div class="main__container">
      <img src="/favicon.svg" alt="" />
      <h1 class="main__title-game">HANGMAN</h1>
      <h2 class="main__title-username">INSERT USERNAME</h2>
      <input id="username-value" />
      <span id="username-validation"></span>
      <div class="container__level">
        <label for="input-easy">
          <input type="radio" name="level" id="input-easy" />EASY
        </label>
        <label for="input-medium">
          <input type="radio" name="level" id="input-medium" />MEDIUM
        </label>
        <label for="input-hard">
          <input type="radio" name="level" id="input-hard" />HARD
        </label>
      </div>
      <a href="#start" class="main__link-start">START</a>
      <a href="#ranking" class="main__link-ranking">RANKING</a>
    </div>
</template>`;

// --------------------------------------------RANKING SCREEN----------------------------------------

let ranking = `
<template id="ranking">
    <div class="main__container">
      <img src="/favicon.svg" alt="" />
      <h1 class="main__title-game">HANGMAN</h1>
      <h2 class="main__title-username">BEST PLAYERS</h2>
      <section class="main__container-ranking">
        <ol>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
          <li>Name - Score - Time</li>
        </ol>
      </section>
      <a href="#username" class="main__link-username">GO BACK</a>
      <a href="#start" class="main__link-start">START</a>
    </div>
</template>
`;

// --------------------------------------------GAME EASY SCREEN----------------------------------------

let game = `
<template id="game-screen">
    <div class="main__container">
      <div class="container__div-header">
        <img src="" alt="Clock">
        <h2>USERNAME</h2>
        <h2>PUCTUATION</h2>
        <img src="" alt="Star">
      </div>
      <div class="container__div-header-emptyletters"></div>
      <img src="" alt="Hangman">
      <div class="container__div-header-keyboard"></div>
      <h2>HINT</h2>
      <a href="#username" class="main__link-username">RESET</a>
    </div>
</template>
`;

// --------------------------------------------YOU WON SCREEN----------------------------------------

let youWon = `
<template id="you-won">
  <div class="main__container">
    <img src="/favicon.svg" alt="" />
    <h1 class="main__title-game">HANGMAN</h1>
    <h2>USERNAME, YOU BEAT THE GAME</h2>
    <h2>CONGRATULATIONS!!</h2>
    <div class="container__div-ranking">
        <h3>BEST PLAYERS - LEVEL</h3>
        <ol>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        </ol>
    </div>
    <a href="#username" class="main__link-username">PLAY AGAIN</a>
  </div>
</template>
`;

// --------------------------------------------GAME OVER SCREEN----------------------------------------

let gameOver = `
<template id="game-over">
  <div class="main__container">
    <img src="/favicon.svg" alt="" />
    <h1 class="main__title-game">HANGMAN</h1>
    <h2>NICE TRY, USERNAME</h2>
    <h2>BUT TRY AGAIN!!</h2>
    <div class="container__div-ranking">
        <h3>BEST PLAYERS - LEVEL</h3>
        <ol>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        <li>Name - Score - Time</li>
        </ol>
    </div>
    <a href="#username" class="main__link-username">PLAY AGAIN</a>
  </div>
</template>
`;

export { username, ranking, game, youWon, gameOver };
