/**Llenar con una palabra un arreglo y regresar un arreglo que muestre el primero, pero
invertido. */

EventListener();

function EventListener() {
  document
    .getElementById("tamanoArray")
    .addEventListener("keypress", obtenerPalabra);
}

function obtenerPalabra(event) {
  if (event.key != "Enter") return;
  if (!isNaN(event.target.value)) return;
  if (event.target.value == "") return;

  ArrayWord(event.target.value);
}

function ArrayWord(word) {
  let FullWord = "",
    Palabra = word.split(FullWord);
  //   console.log(Palabra);
  Palabra.reverse();
  //   console.log(Palabra);

  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("class", "alert-primary");
  div.innerText = `Invertida : ${Palabra}`;

  output.appendChild(div);
}
