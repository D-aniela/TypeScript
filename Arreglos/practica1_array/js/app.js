/**Crea un array de 10 posiciones de números con valores pedidos por teclado. Mostrar
 el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
 valores y otro para mostrar
 */
let arreglo = [];
const output = document.getElementById("output");

function EventListener() {
  document.addEventListener("DOMContentLoaded", CargarInputs);

  document
    .getElementById("btnInit")
    .addEventListener("click", obtenerResultado);

  document
    .getElementById("btnReiniciar")
    .addEventListener("click", reiniciarApp);
}

function reiniciarApp() {
  window.location.reload();
}

EventListener();

function CargarInputs() {
  for (let x = 0; x < 10; x++) {
    const divFG = document.createElement("div");
    divFG.setAttribute("class", "form-group");

    const labelFG = document.createElement("label");
    labelFG.innerText = `Dame el valor de la posición ${x}`;

    const inputFC = document.createElement("input");
    inputFC.setAttribute("class", "form-control");
    inputFC.setAttribute("type", "number");
    inputFC.setAttribute("id", `inputValor${x}`);
    inputFC.setAttribute("placeholder", "Ingresa el valor");

    output.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFC);
  }
}

function obtenerResultado() {
  for (let x = 0; x < 10; x++) {
    const valor = (arreglo[x] = document.getElementById(
      `inputValor${x}`
    ).value);
    if (valor != "") {
      arreglo[x] = valor;
    } else {
      arreglo[x] = `<span class = 'text-danger'>No se ingresó número</span>`;
    }
  }

  MostrarValores();
}

function MostrarValores() {
  ClearDom();
  const MostrarValoresUl = document.getElementById("mostrarArreglo");
  for (let x = 0; x < arreglo.length; x++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerHTML = `<p>Índice: ${x}</p> <p>Valor: ${arreglo[x]}</p>`;

    MostrarValoresUl.appendChild(li);
  }
}

function ClearDom() {
  while (output.firstChild) {
    output.firstChild.remove();
  }
}
