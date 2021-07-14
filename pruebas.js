// let prueba = {1: 'carlos'}
// console.log(prueba[1].length)

// ------------------

// let word = 'pepinillo'
// https://translate.google.com/?hl=es&sl=en&tl=es&text=weak&op=translate
// Template string of the word to translate it into spanish
// let url = `https://translate.google.com/?hl=es&sl=en&tl=es&text=${word}&op=translate`

// ------------------

// Groups of words by number of characters, can be added to an external JS and imported to clasify better the code

let fourLetter = {
  1: {word: 'door', hint: '', length: '4'},
  2: 'cafe',
  3: 'walk',
  4: 'loop',
  5: 'fate',
  6: 'cold',
  7: 'poem',
  8: 'silk',
  9: 'bear',
  10: 'safe'
}

let fiveLetter = {
  1: 'chief',
  2: 'space',
  3: 'sweet',
  4: 'north',
  5: 'shake',
  6: 'trust',
  7: 'glass',
  8: 'beard',
  9: 'crime',
  10: 'rebel'
}

let sixLetter = {
  1: 'palace',
  2: 'circle',
  3: 'bridge',
  4: 'please',
  5: 'prince',
  6: 'global',
  7: 'polite',
  8: 'branch',
  9: 'letter',
  10: 'person'  
}

let sevenLetter = {
  1: 'economy',
  2: 'process',
  3: 'premium',
  4: 'extreme',
  5: 'alcohol',
  6: 'context',
  7: 'fitness',
  8: 'student',
  9: 'sunrise',
  10: 'fashion'  
}

let eightLetter = {
  1: 'relation',
  2: 'research',
  3: 'colorful',
  4: 'sentence',
  5: 'delivery',
  6: 'feedback',
  7: 'magazine',
  8: 'discount',
  9: 'director',
  10: 'teenager'  
}

let nineLetter = {
  1: 'transform',
  2: 'important',
  3: 'operation',
  4: 'crosswalk',
  5: 'knowledge',
  6: 'authority',
  7: 'exception',
  8: 'confusion',
  9: 'detective',
  10: 'vegetable'  
}

// ------------------

// RANDOM NUMBER BETWEEN 1 AND 10:
// ! CARE! INCLUDES 0 AND NOT 10 (HAVE TO ADD ONE WORD (¡NO!), ADD 1 (MEH), OR REMAKE INTO A FUNCTION TO SOLVE)
// ? CHANGE KEYS TO 0-9 MAYBE
// ? Math.ceil() -> rounds up
// let randomToTen = Math.floor(Math.random()*10)
// console.log(randomToTen)
// console.log(fourLetter[randomToTen])

// ------------------

function getRandomNumber(minValue, maxValue) {
  let amountNumbers = (maxValue - minValue) + 1; // We declarate how many numbers will be in our calculation
  let floatNumber = Math.random() * amountNumbers; // We get a random float number (0 to 1) and multiply by our amount
  let result = Math.floor(floatNumber) + minValue; // We round our number, and avoid values below our range adding the min
  return result;
}

function getRandomWord() {
  let position = getRandomNumber(1,10); // Max number, if we want escalation, should be a variable that measures the max key in the object
  return fourLetter[position]; // fourLetter should be a variable too, taking the exact group that we want at any given moment
}

let wordsInPlay = { // This variable could (should?) be placed in the database JS document
  4: fourLetter,
  5: fiveLetter,
  6: sixLetter,
  7: sevenLetter,
  8: eightLetter,
  9: nineLetter
}

// HOW MANY LETTERS DO WE WANT OUR WORD TO HAVE?

let currentLetters = 4; // Care, global variable?

function getGroupOfWords() {
  let group = wordsInPlay[currentLetters];
  return group;
}

// ? FOR RANDOM DIFFICULTY

function getRandomGroupOfWords() {
  let groupNumber = getRandomNumber(4,9); // We get a random number of how many letters do we want our word to have
  let randomGroup = wordsInPlay[groupNumber]; // Select the group with a position 4 to 9 from our groups object
  return randomGroup;
}

// ------------------

let testWord = 'pepinillo'
const DISPLAYWORD = document.getElementById('word-display')

function createWord() {
  for (let i = 0; i < testWord.length; i++) {
    let element = document.createElement('span');
    element.innerHTML = testWord[i];
    element.style.textDecoration = 'underline';
    element.style.paddingLeft = '10px';
    DISPLAYWORD.appendChild(element);
  } return
}

// ------------------

// Test for some letter in a string

  let pressedKey = 'p' // We can make an event listener on keyup in the physical keyboard on PC (valid also, en theory, to mobile) or on click on the virtual one in the HTML

function lookForLetter() {
  for (let i = 0; i < testWord.length; i++) {
    let regExpLetter = new RegExp(`${pressedKey}`);
    // console.log(regExpLetter);
    let test = regExpLetter.test(testWord[i]);
    // console.log(test);
    if (test === true) {
      console.log(`La letra ${pressedKey} está en la palabra`);
    } else {
      console.log(`La letra ${pressedKey} NO está en la palabra`);
    }
  }
}

// PARA COMPROBAR SI TODAS LAS LETRAS SE HAN MOSTRADO, SE PUEDE AÑADIR UN ATRIBUTO DATA-CORRECT A CADA SPAN AL ACERTAR LA LETRA, DE FORMA QUE,
// CUANDO EL LENGTH DEL QUERYSELECTORALL DE [DATA-CORRECT] SEA IGUAL AL LENGTH DEL STRING DE LA PALABRA (ñé)