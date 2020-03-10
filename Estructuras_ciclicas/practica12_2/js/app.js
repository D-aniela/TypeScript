/**La conjetura de ULAM consiste en lo siguiente:
a. Inicia a partir de cualquier número positivo entero.
b. Si el número es par, se divide entre 2; si es impar, se multiplica por 3 y se agrega uno. 
De manera que podemos obtener lo siguiente: 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
Dado un numero positivo, ejecute la serie ULAM */

//Si es par / 2
//Si es impar (n x 3) + 1

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", calcularULAM);
}

function crearDom() {
  for (x = 1; x <= 1; x++) {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.innerText = `Ingrese un número entero`;

    const input = document.createElement("input");

    input.setAttribute("type", "number");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "numero");

    output.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }
  const button = document.createElement("button");
  button.innerText = "Calcular ULAM";
  button.setAttribute("class", "btn btn-outline-success btn-block");
  button.setAttribute("id", "btnInit");

  output.appendChild(button);

  eventListener();
}


function calcularULAM() {
  let numero = Number(document.getElementById('numero').value);

  while (numero > 1) {
    if (numero % 2 == 0) {
      numero = numero / 2;
    } else {
      numero = numero * 3 + 1;
    }
 
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = numero;
  
    output.appendChild(li);
  }

}

crearDom();
