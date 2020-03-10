/**Una persona adquirió un producto para pagar en 20 meses. El primer mes pago $10, el segundo
$20, el tercero $40 y así sucesivamente. Realice un algoritmo para determinar cuánto debe
pagar mensualmente y el total de lo que pago después de los 20 meses. */

// Pago mensual
// Pago total
// acumulador

function crearDom() {
  const button = document.createElement("button");
  button.innerText = "Calcular pagos";
  button.setAttribute("class", "btn btn-outline-success btn-block");
  button.setAttribute("id", "btnInit");

  output.appendChild(button);

  eventListener();
}

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", calcularPagoMensual);
}

function calcularPagoMensual() {
  let pagoMensual = 10;
  let acumulador = 0;

  for (let x = 1; x <= 20; x++) {
    pagoMensual = pagoMensual * 2;

    acumulador += pagoMensual;

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    ul.setAttribute("id", "Pagos");

    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerText = `Pago Mensual por mes es ${pagoMensual}
            Total de pago: ${acumulador}`;

    output.appendChild(ul);
    ul.appendChild(li);
  }
}

crearDom();
