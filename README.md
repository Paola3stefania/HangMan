# HangMan

Develop a Game - Play with Assembler

In this game you will play Hangman in which you will have to discover the hidden word by choosing letters.

## Phase 1

You will have to guess a word by clicking the letter boxes on the screen before the hangman is drawn on the screen.

- You will have to display on the screen the letters of the alphabet in div boxes so that each letter is displayed in an element on the screen, and then when the div is displayed, you will have to compare the letter in the div to see if the word contains that letter.
- Once a letter is clicked you will have to remove the letter from the screen.

* If the letter is in the word, you will have to add the letter to the results.
* If the letter is present more than once in the word you will have to add it in each position.

- If the letter is not in the word, you will have to draw a part of the hangman.
- You will have to count the number of letters that are clicked to stop the game once the hangman has been completed.
- Once the hangman has been completed, if the user didn’t guess the word, it means that the user lost.
- If the user guesses the word before the hangman has been completed, the user has won and the game ends.
- You can store the words that are used in an array of words.
- The words should have different lengths so that each round has a word that is longer than the previous word.

![First Image](/assets/img/Phase1.png)
![Second Image](/assets/img/Phase1b.png)
![Third Image](/assets/img/Phase1c.png)

## Phase 2

After each round of the game, you can choose a word that is longer than the previous one so that after each round, the words are longer than before.

### Extra Steps

1. All the game interaction should be usable with only the keyboard
2. Improve the design such that it is designed using a mobile-first strategy and responsive

## Requirements

You must use only one HTML file to develop this game, this means that you must hide and show dynamic elements without reloading the page.
Before starting the game, you must enter your username on the screen to start the game.

- The ranking of the players who have played a game Must always be visible on screen
- Refreshing the page will lose the information stored in the ranking, since the information must be stored in JS variables
- When a player enters his username and clicks on the start button, the player must be added to the ranking with the message "Currently playing ..."
  When this player finishes the game, the ranking will be dynamically updated to show your score instead of the previous message
- When the player finishes the game, the Scoring screen will be displayed with the results of the game.
- All game processes must be carried out without reloading the page
- You will not be able to use cookies, localStorage or any similar technology
- You must store:
  Current game
  User name
  Game duration
  Scoring of the current game
  Ranking
  User name
  Scoring
- The ranking will show above the last record that has been entered
- After each game the total score is stored (if you refresh the browser is lost)
- You cannot use third-party libraries
- You must use Git for the development of the project and branches for each feature, try not to separate branches by person
