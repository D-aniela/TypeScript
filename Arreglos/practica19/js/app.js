/**. Suponga que tiene un arreglo de longitud = 30 con números enteros generados de
manera aleatoria.
Desarrolle una solución que regrese en otro arreglo todos los múltiplos de 7 del
arreglo anterior.*/

eventListener();

function eventListener() {
  addEventListener("click", getSize);
}

let arreglo = [];
let arregloMultipo = [];

function getSize() {
  for (let i = 0; i < 30; i++) {
    arreglo.push(Math.floor(Math.random() * (1000 - 1) + 1));
    if (arreglo[i] % 7 == 0) {
      arregloMultipo.push(arreglo[i]);
    //   console.log(arregloMultipo);
    }
  }
//   console.log(arregloMultipo);
  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("class", "alert-primary");
  div.innerText = `Arreglo: ${arreglo}

Múltiplos de 7: ${arregloMultipo}`;

  output.appendChild(div);
}
