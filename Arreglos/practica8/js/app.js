/**3. Crear una función que reciba un arreglo tamaño n con números aleatorios y devuelva
un nuevo arreglo con solo los números pares.
deberá presentar ambos arreglos en pantalla. */

EventListener();

let array = [];

function EventListener() {
  document.getElementById("tamanoArray").addEventListener("keypress", getSize);
}

function getSize(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (isNaN(event.target.value)) return;
  if (event.target.value <= 0) return;

  crearArreglo(event.target.value);
}

function crearArreglo(tamanoArray) {
  let arreglo = [];
  let arregloPar = [];

  for (let i = 0; i <= tamanoArray; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (1000 - 1)) + 1;
    arreglo.push(numeroAleatorio);
    if (numeroAleatorio % 2 == 0) {
      arregloPar.push(numeroAleatorio);
    }
  }
//   console.log(arreglo);
//   console.log(arregloPar);
  const output = document.getElementById('output');
  const div = document.createElement('div');
  div.setAttribute('class', 'alert alert-primary mt-2');
  div.innerText = `El arreglo es: ${arreglo}
  El arreglo par es: ${arregloPar}`;

  output.appendChild(div);
}
