/**Realice un programa que imprima la serie numérica del 100 al 0 */
let button;

function crearDom() {
  const output = document.getElementById("output");
  output.setAttribute("class", "text-center");

  const button = document.createElement("button");
  button.innerText = "Imprimir números";
  button.setAttribute("id", "btnInit");
  button.setAttribute("class", "btn btn-outline-success btn-block col-2");

  output.appendChild(button);

  eventListener();
}

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", imprimir);
}

function imprimir() {
  for (let x = 100; x >= 0; x--) {

    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item col-2");
    li.innerText = x;

    output.appendChild(li);
  }
}

crearDom();
