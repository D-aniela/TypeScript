/**El empleado de la tienda “Tiki Taka” realiza N ventas durante el día, se requiere saber cuántas
 de ellas fueron mayores a $1000, cuantas fueron mayores a $500 pero menores o iguales a
$1000, y cuantas fueron menores o iguales $500. Además, se requiere saber el monto de lo
vendido en cada categoría y de forma global. */
function eventListener() {
  let button = document.getElementById("btnInput");
  button.addEventListener("click", AgregarInput);

  let button2 = document.getElementById("btnVentas");
  button2.addEventListener("click", CalcularVentas);
}

eventListener();

let contador = 0;
const output = document.getElementById("output");

function AgregarInput() {
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = "Ingrese ventas del día";

  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("type", "number");
  input.setAttribute("id", `inpVenta${contador}`);
  contador++;

  output.appendChild(div);
  div.appendChild(label);
  div.appendChild(input);
}

function CalcularVentas() {
  let ventaMayor = 0;
  let ventaMedia = 0;
  let ventaMenor = 0;
  let ventaTotal = 0;

  for (let x = 0; x < contador; x++) {
    let valor = Number(document.getElementById(`inpVenta${x}`).value);

    if (valor > 1000) {
      ventaMayor++;
    } else if (valor > 500 && valor <= 1000) {
      ventaMedia++;
    } else {
      ventaMenor++;
    }
    ventaTotal += valor;
  }
  const print = document.createElement("div");
  print.setAttribute("class", "alert alert-primary");
  print.setAttribute("role", "alert");
  print.innerText = `Ventas mayores a $1000 : ${ventaMayor}
                  Ventas menores a $1000 y mayores a $500 : ${ventaMedia}
                  Ventas menores a $500 : ${ventaMenor}
                  Total Venta : ${ventaTotal}`;

  output.appendChild(print);
}
