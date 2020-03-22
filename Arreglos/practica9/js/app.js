/**Rellene un array con los números primos comprendidos entre 1 y 1000 y los muestre
en pantalla en orden descendente. */

EventListener();

let arrayGlobal = [];

function EventListener() {
  document.addEventListener("DOMContentLoaded", llenarPrimos);
  document.getElementById("tamanoArray").addEventListener("keypress", getArray);
}

function getArray(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (isNaN(event.target.value)) return;
  if (event.target.value <= 0) return;

  createArray(event.target.value);
}

function llenarPrimos() {
  for (let i = 0; i < 1000; i++) {
    let bandera = true;

    for (let x = 2; x < i; x++) {
      if (i % x == 0) {
        bandera = false;
        break;
      }
    }
    if (bandera) {
      arrayGlobal.push(i);
    }
  }
  // console.log(arrayGlobal);
}

function createArray(tamanoArray) {
  let arrayPrimo = [];

  for (let i = 0; i < tamanoArray; i++) {
    let numeroAleatorio =
      Math.floor(Math.random() * (arrayGlobal.length - 1)) + 1;
    arrayPrimo.push(arrayGlobal[numeroAleatorio]);
  }

  arrayPrimo.sort();

  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "alert alert-primary mt-2");
  div.innerText = `Numeros primos: ${arrayPrimo}`;

  output.appendChild(div);
}
