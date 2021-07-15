let testWord = "pepinillo";

function lookForLetter(letter) {
  let correct = 0;
  for (let i = 0; i < testWord.length; i++) {
    let test = letter.includes(testWord[i]);
    correct = (test === true) ? correct + 1 : correct + 0;
  }
  result = (correct > 0) ? correctLetter(letter) : wrongLetter(letter);
}

// FUNCIONALIDADES:
// TODO REDONDEAR LA LETRA CORRECTA EN KEYBOARD
// TODO MOSTRAR LAS LETRAS COINCIDENTES EN LA PALABRA JUGABLE
// TODO METER LA LETRA EN UN ARRAY POR SI QUEREMOS HACERLE UN DISPLAY DE LETRAS USADAS
// TODO SUMAR PUNTUACIÓN?
function correctLetter(letter) {
  console.log("correct "+letter);
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