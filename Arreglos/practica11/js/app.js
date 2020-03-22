/**Que lea una cadena y la encripte sumando 3 al código ASCII de cada carácter. Mostrar
por pantalla.
 */

EventListener();
let words = [];

function EventListener() {
  document
    .getElementById("tamanoArray")
    .addEventListener("keypress", ObtenerCadena);
}

function ObtenerCadena(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;

  ArrayString(event.target.value);
}

function ArrayString(tamanoArray) {
  words = [];

  for (let i = 0; i < tamanoArray.length; i++) {
    words[i] = tamanoArray.charAt(i).charCodeAt(0);
    // console.log(words);
    words[i] = tamanoArray.charAt(i).charCodeAt(0) + 3;
  }
  // console.log(words);
  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("class", "alert alert-primary");
  div.innerText = words;

  output.appendChild(div);
}
