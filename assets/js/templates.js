// --------------------------------------------USERNAME SCREEN----------------------------------------
let username = `
<template id="username">
    <div class="main__container">
      <img src="/favicon.svg" alt="" />
      <h1 class="main__title-game">HANGMAN</h1>
      <h2 class="main__title-username">INSERT USERNAME</h2>
      <form id="username-form" action="" method="post">
      <input id="username-value" maxlenght="3" type="text" required/>
      <span id="username-validation">Alphanumeric, max 6 characters</span>
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
      </form>
      <a href="#start" type="submit" id="link-start" class="main__link-start">START</a>
      <a href="#ranking" id="link-ranking" class="main__link-ranking">RANKING</a>
      </form>
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
        <ol></ol>
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
    <header class="container__header">
      <p id="countdown-to-end"></p>
      <h2>USERNAME</h2>
      <h2>SCORE</h2>
      <img src="" alt="Star">
    </header>
    <div class="container__div-header-emptyletters" id="display-word"></div>
    <img src="" alt="Hangman">
    <div class="keyboard" id="keyboard">
			<button class="btn" id="keyA" data-letter="a">A</button>
			<button class="btn" id="keyB" data-letter="b">B</button>
			<button class="btn" id="keyC" data-letter="c">C</button>
			<button class="btn" id="keyD" data-letter="d">D</button>
			<button class="btn" id="keyE" data-letter="e">E</button>
			<button class="btn" id="keyF" data-letter="f">F</button>
			<button class="btn" id="keyG" data-letter="g">G</button>
			<button class="btn" id="keyH" data-letter="h">H</button>
			<button class="btn" id="keyI" data-letter="i">I</button>
			<button class="btn" id="keyJ" data-letter="j">J</button>
			<button class="btn" id="keyK" data-letter="k">K</button>
			<button class="btn" id="keyL" data-letter="l">L</button>
			<button class="btn" id="keyM" data-letter="m">M</button>
			<button class="btn" id="keyN" data-letter="n">N</button>
			<button class="btn" id="keyO" data-letter="o">O</button>
			<button class="btn" id="keyP" data-letter="p">P</button>
			<button class="btn" id="keyQ" data-letter="q">Q</button>
			<button class="btn" id="keyR" data-letter="r">R</button>
			<button class="btn" id="keyS" data-letter="s">S</button>
			<button class="btn" id="keyT" data-letter="t">T</button>
			<button class="btn" id="keyU" data-letter="u">U</button>
			<button class="btn" id="keyV" data-letter="v">V</button>
			<button class="btn" id="keyW" data-letter="w">W</button>
			<button class="btn" id="keyX" data-letter="x">X</button>
			<button class="btn" id="keyY" data-letter="y">Y</button>
			<button class="btn" id="keyZ" data-letter="z">Z</button>
		</div>
    <footer>
      <p id="display-hint">HINT</p>
      <a href="#username" class="main__link-username">RESET</a>
    </footer>
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
    <div class="main__container-ranking">
        <h3>BEST PLAYERS - LEVEL</h3>
        <ol></ol>
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
    <div class="main__container-ranking">
        <h3>BEST PLAYERS - LEVEL</h3>
        <ol></ol>
    </div>
    <a href="#username" class="main__link-username">PLAY AGAIN</a>
  </div>
</template>
`;

export { username, ranking, game, youWon, gameOver };
