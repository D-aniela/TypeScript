/**Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6
años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años?
represente la solución. */

function eventListener() {
  let button = document.getElementById("btnInit");
  button.addEventListener("click", calcularSalario);
}

eventListener();

function calcularSalario() {
  const listGroup = document.getElementById("listaSalario");

  let salario = 1500;
  let acumulador = 0;
  let totalSalario = 0;
  let sumaSalario = 0;
  for (x = 1; x <= 6; x++) {
    porcentaje = salario * 0.1 + salario;
    acumulador += porcentaje;

    totalSalario = acumulador * 12;
    sumaSalario += totalSalario;

    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerText = `Año ${x}, Sueldo : ${acumulador}  Total Sueldo: ${sumaSalario}`;
    listGroup.appendChild(li);

  }
}
