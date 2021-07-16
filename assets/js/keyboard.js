import { lookForLetter } from "./letter.js";

// KEYBOARD FUNCTIONALITY

function blockLetter(letter) {
	letter = letter.toLowerCase();

	let KEYS = document.querySelectorAll(".btn[data-letter]");
	let letrasEnTeclado = [];
	for (const element of KEYS) {
		letrasEnTeclado.push(element.getAttribute("data-letter"));
	}

	if (letrasEnTeclado.includes(letter)) {
		for (let i = 0; i < KEYS.length; i++) {
			if (letter == KEYS[i].getAttribute("data-letter")) {
				console.log("this is data letter", KEYS[i].getAttribute("data-letter"));
				KEYS[i].setAttribute("disabled", "disabled");
				return console.log(letter);
			}
		}
	}
}

function buttonPressed() {
	this.setAttribute("disabled", "disabled"); // We block a new interaction with the letter button
	let letter = this.dataset.letter;
	lookForLetter(letter);
}

export { buttonPressed, blockLetter };
