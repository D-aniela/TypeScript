/**Desarrolle una solución que lea un numero M, obtenga y cuente todos los números primos
menores a M. */
function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", numerosPrimos);
}
function crearDom() {
  const output = document.getElementById("output");

  const div = document.createElement("div");
  div.classList.add("form-group");

  const label = document.createElement("label");
  label.innerText = "Ingrese un número entero";

  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("type", "number");
  input.setAttribute("id", "numero");

  output.appendChild(div);
  div.appendChild(label);
  div.appendChild(input);

  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-success btn-block");
  button.setAttribute("id", "btnInit");
  button.innerText = "Obtener números";

  output.appendChild(button);

  eventListener();
}

function numerosPrimos() {
  let numero = Number(document.getElementById("numero").value);
  let bandera = true;

  for (let x = 0; x <= numero; x++) {
    bandera = true;

    for (let y = 2; y < x; y++) {
      if (x % y == 0) {
        bandera = false;
      }
    }
    if (bandera == true) {
      console.log(x);

      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerText = x;

      output.appendChild(li);
    }
  }
}

crearDom();
