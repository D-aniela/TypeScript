/*Una persona se encuentra en el kilómetro 70 de la carretera Aguascalientes Zacatecas, otra se
encuentra en el km 150 de la misma carretera, la primera viaja en dirección a Zacatecas,
mientras que la segunda se dirige a Aguascalientes, a la misma velocidad. Realice un algoritmo
para determinar en qué kilómetro de esa carretera se encontrarán*/

function crearDom() {
  const button = document.createElement("button");
  button.innerText = "Calcular punto de encuentro";
  button.setAttribute("class", "btn btn-outline-success btn-block");
  button.setAttribute("id", "btnInit");

  output.appendChild(button);

  eventListener();
}

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", calcularEncuentro);
}

function calcularEncuentro() {
  let Aguascalientes = 70;
  let Zacatecas = 150;
  let bandera = true;

  while (bandera) {
    Aguascalientes++;
    Zacatecas--;
    if (Aguascalientes == Zacatecas) {
      bandera = false;
    }
  }
  const div = document.createElement("div");

  const print = document.createElement("div");
  print.setAttribute("class", "alert alert-primary");
  print.setAttribute("role", "alert");
  print.innerText = `Se encontrarán en el Kilómetro: ${Aguascalientes}`;

  div.appendChild(print);
  output.appendChild(div);
}

crearDom();
