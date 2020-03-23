/**Dado un array de números de 5 posiciones con los siguientes valores
{0,1,2,3,4,5,6,7,8,9}, guardar los valores de este array en otro array distinto, pero con
los valores invertidos, es decir, que el segundo array deberá tener los valores
{9,8,7,6,5,4,3,2,1,0}. */

let valoresOrig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

EventListener();

function EventListener() {
  document.addEventListener("click", validarClick);
}

function validarClick(e) {
  switch (e.target.id) {
    case "imprimir":
      for (let i = 0; i < valores.length; i++) {
        valores = valores.reverse();
        console.log(valores);
        break;
      }
      const output = document.getElementById("output");
      const div = document.createElement("div");
      div.setAttribute("class", "form-group");
      div.setAttribute("alert", "success");
      div.innerText = `${valoresOrig}
    ${valores}`;

      output.appendChild(div);
  }
}
