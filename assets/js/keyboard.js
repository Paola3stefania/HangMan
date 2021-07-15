/* IMPORTS */

import { lookForLetter } from './letter.js';

/* KEYBOARD FUNCTIONALITY */

const KEYS = document.querySelectorAll('[data-letter]'); // We select all elements by the attribute as a NodeList.

KEYS.forEach((key) => { // Add an event listener for each key button
  key.addEventListener('click', buttonPressed)
})

/* We evaluate every keyboard event and, if it's a letter, we launch our functions: */
document.addEventListener('keydown', (event) => { // ! CARE WITH ALT, TAB, ETC.
  let letter = event.key;
  let regExpTest = /[a-z]+/g;
  let indexWord
  if (regExpTest.test(letter)) {
    indexWord = lookForLetter(letter)
  }
  let WORDELEMENTS = document.querySelectorAll('#display-word span')
  for (const x of indexWord) {
    WORDELEMENTS[x].innerHTML = letter
  }
  blockLetter(letter); // We block a new interaction with the letter button
})

function blockLetter(letter) {
  for (let i = 0; i < KEYS.length; i++) {
    let test = (KEYS[i].dataset.letter === letter) ? KEYS[i].setAttribute("disabled", "disabled") : "";
  }
}

function buttonPressed() {
  this.setAttribute("disabled", "disabled"); // We block a new interaction with the letter button
  let letter = this.dataset.letter;
  let indexWord = lookForLetter(letter)
  let WORDELEMENTS = document.querySelectorAll('#display-word span')
  for (const x of indexWord) {
    WORDELEMENTS[x].innerHTML = letter
  }
}

// TODO
// document.getElementById("username-value").addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//   e.preventDefault();
//   }
//   });

/* EXPORTS */

export {  }