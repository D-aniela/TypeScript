/**Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees
 de la manera que quieras y muestra por pantalla la media de valores del array.
 */

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", AddEvents);
}

function AddEvents() {
  document.getElementById("btnInput").addEventListener("click", AddInput);

  document
    .getElementById("btnPromedio")
    .addEventListener("click", CalcularPromedio);
}

let contadorInputs = 0;
let arregloPromedio = [];

function AddInput() {
  const output = document.getElementById("output");

  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12");

  const divFG = document.createElement("div");
  divFG.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = `Ingrese la calificación ${contadorInputs + 1}`;

  const inputFC = document.createElement("input");
  inputFC.setAttribute("class", "form-control");
  inputFC.setAttribute("type", "number");
  inputFC.setAttribute("placeholder", "Ingrese valor");
  inputFC.setAttribute("id", `InputPromedio${contadorInputs}`);

  contadorInputs++;

  output.appendChild(divCol);
  divCol.appendChild(divFG);
  divFG.appendChild(label);
  divFG.appendChild(inputFC);
}

function CalcularPromedio() {
  llenarArray();
  let acumulador = 0;

  for (let i = 0; i < contadorInputs; i++) {
    acumulador += arregloPromedio[i];
  }
  acumulador/=contadorInputs;
  console.log(acumulador);

  const imprimir = document.getElementById('imprimir');
  imprimir.innerText = acumulador;

}

function llenarArray() {
  for (let x = 0; x < contadorInputs; x++) {
    const valor = document.getElementById(`InputPromedio${x}`).value;

    if (!isNaN(valor)) {
      arregloPromedio[x] = Number(valor);
    } else {
      arregloPromedio[x] = 0;
    }
  }
}
