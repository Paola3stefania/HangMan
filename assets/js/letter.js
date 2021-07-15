/* IMPORTS */

import { currentWord } from './word.js';

let currentCorrect = 0

function lookForLetter(letter) {
  let correct = 0;
  let index = []
  for (let i = 0; i < currentWord.length; i++) {
    let test = letter.includes(currentWord[i]);
    // correct = (test === true) ? correct + 1 : correct + 0;
    if (test) {
      correct += 1;
      index.push(i);
    }
  }
  let result = (correct > 0) ? correctLetter(letter, correct) : wrongLetter(letter);
  return index
}

// FUNCIONALIDADES:
// TODO REDONDEAR LA LETRA CORRECTA EN KEYBOARD
// // TODO MOSTRAR LAS LETRAS COINCIDENTES EN LA PALABRA JUGABLE
// TODO METER LA LETRA EN UN ARRAY POR SI QUEREMOS HACERLE UN DISPLAY DE LETRAS USADAS
// TODO SUMAR PUNTUACIÓN?
function correctLetter(letter, correct) {
  currentCorrect += correct;
  console.log("correct "+letter);
  console.log("correct "+currentCorrect)
  console.log("error "+currentErrors)
}

let currentErrors = 0;

// FUNCIONALIDADES:
// // AÑADIR UN ERROR
// TODO TACHAR LETRA INCORRECTA EN KEYBOARD
// TODO METER LA LETRA EN UN ARRAY POR SI QUEREMOS HACERLE UN DISPLAY DE LETRAS USADAS
// TODO AÑADIR UN ERROR + LANZAR FUNCIÓN CÁLCULO ERRORES
// TODO RESTAR PUNTUACIÓN?
function wrongLetter(letter) {
  currentErrors += 1;
  console.log("wrong "+letter);
}

/* EXPORTS */

export { lookForLetter };