/* IMPORTS */

import { fourLetter, fiveLetter, sixLetter, sevenLetter, eightLetter, nineLetter, wordsInPlay } from './wordsDatabase.js';

/* WORD FUNCTIONALITY */

function getRandomNumber(minValue, maxValue) {
  let amountNumbers = (maxValue - minValue) + 1; // We declarate how many numbers will be in our calculation
  let floatNumber = Math.random() * amountNumbers; // We get a random float number (0 to 1) and multiply by our amount
  let result = Math.floor(floatNumber) + minValue; // We round our number, and avoid values below our range adding the min
  return result;
}

let currentLetters = 4 // We declare how many letters our current word has
let currentGroup
let currentWord
let currentHint

function getGroupOfWords() { // We select the group of words by the amount of letters of currentLetters
  let group = wordsInPlay[currentLetters];
  currentGroup = group
}

// TODO - THIS FUNCTION SHOULD DISPLAY WORDS THAT HAVE NOT BEEN DISPLAYED BEFORE
function getRandomWord() { // To select a random word from our group, we need a random number from 1 to 10 (amount of words in each group)
  let position = getRandomNumber(1,10); // Max number, if we want escalation, should be a variable that measures the max key in the object
  currentWord = currentGroup[position].word;
  currentHint = currentGroup[position].hint;
  currentGroup[position].displayed = true;
}

const DISPLAYWORD = document.getElementById('display-word') // We look for the element in the HTML where we are going to print our word
const DISPLAYHINT = document.getElementById('display-hint') // We look for the element in the HTML where we are going to print our hint

function displayWord() {
  for (let i = 0; i < currentWord.length; i++) {
    let element = document.createElement('span');
    element.innerHTML = currentWord[i];
    element.style.paddingLeft = '10px';
    DISPLAYWORD.appendChild(element);
    DISPLAYHINT.innerHTML = currentHint
  } return
}

getGroupOfWords()
getRandomWord()
displayWord()

// /* EXPORTS */

export {  };