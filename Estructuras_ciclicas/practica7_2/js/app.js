/**Realice un algoritmo para generar e imprimir los números pares que se encuentren entre 0 y
100 */
let button;

function crearDom() {
  const output = document.getElementById("output");
  output.setAttribute("class", "text-center");

  let button = document.createElement("button");
  button.innerText = "Imprimir números";
  button.setAttribute("id", "btnInit");
  button.setAttribute("class", "btn btn-outline-success btn-block col-2");

  output.appendChild(button);

  eventListener();
}

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", ImprimirNumeros);
}

function ImprimirNumeros() {
  for (let x = 0; x <= 100; x++) {
    if (x % 2 != 1) {
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item col-2");
      li.innerText = x;

      output.appendChild(li);
    }
  }
}

crearDom();
