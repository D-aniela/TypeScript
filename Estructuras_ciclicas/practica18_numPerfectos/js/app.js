/**13. Desarrolle una solución para calcular e imprimir los números perfectos menores a N.
Se dice que un número es perfecto si:
a. “La suma de sus divisores excepto el mismo es igual al propio número”
 */

function eventListener() {
  let button = document.getElementById("btnInit");
  button.addEventListener("click", imprimirPerfectos);
}

eventListener();

function imprimirPerfectos() {
  let listGroup = document.getElementById("ListaPerfectos");
  let numero = Number(prompt("Ingrese un número"));
  let acumulador = 0;
  let resultado = 0;

  for (let i = 1; i < numero; i++) {
    resultado = numero % i;
    if (resultado == 0) {
      acumulador += i;

      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerText = acumulador;
      listGroup.appendChild(li);
    }
  }
  if (acumulador == numero) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerText = acumulador;
    listGroup.appendChild(li);
  } else {
    const imprimir = document.getElementById("imprimir");
    imprimir.innerText = "no es número perfecto";
  }
}