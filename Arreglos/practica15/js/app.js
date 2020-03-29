/**La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista
ordenada de elementos. Funciona al dividir repetidamente a la mitad la porción de la 
lista que podría contener al elemento, hasta reducir las ubicaciones posibles a solo
una.
Dado un arreglo de 25 posiciones llenado con números de manera aleatoria, desarrolle
una solución que le permita al usuario encontrar un numero dentro de dicho arreglo
mediante el método de búsqueda binaria.  */

eventListener();

function eventListener() {
  document.getElementById("btnSearch").addEventListener("click", getArray);
}
let arreglo = [];

function getArray() {
  const output = document.getElementById("output");
  for (let i = 0; i < 25; i++) {
    arreglo.push(Math.floor(Math.random() * (50 - 1) + 1));
    console.log(arreglo[i]);
  }
  const label = document.createElement("label");
  label.innerText = "Ingrese numero a buscar en array";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "numArray");
  input.setAttribute("placeholder", "Numero del 1 al 50");

  output.appendChild(label);
  output.appendChild(input);
  eventListener2();
}

function eventListener2() {
  document.getElementById("numArray").addEventListener("keypress", getSize);
}

function getSize(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (isNaN(event.target.value)) return;

  printArray(event.target.value);
}

function printArray(numArray) {
  for (let i = 0; i < arreglo.length; i++) {
    if (numArray == arreglo[i]) {
      console.log(numArray);
      const div = document.createElement("div");
      div.setAttribute("class", "alert-primary");
      div.innerText = `${numArray} posicion ${i}`;

      output.appendChild(div);
    }
    //  else {
    //   const div = document.createElement("div");
    //   div.setAttribute("class", "alert-primary");
    //   div.innerText = "El numero no existe en el arreglo";

    //   output.appendChild(div);
    // }
  }
}
