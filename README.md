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

![First Image](/img/Phase1.png)
![Second Image](/img/Phase1b.png)
![Third Image](/img/Phase1c.png)

## Phase 2

After each round of the game, you can choose a word that is longer than the previous one so that after each round, the words are longer than before.

### Extra Steps

1. All the game interaction should be usable with only the keyboard
2. Improve the design such that it is designed using a mobile-first strategy and responsive
