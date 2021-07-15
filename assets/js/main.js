import { navigate } from "./router.js";

window.addEventListener("hashchange", navigate);
var wrapper = document.getElementById("app");

console.log("hola");
navigate();

export { wrapper };
