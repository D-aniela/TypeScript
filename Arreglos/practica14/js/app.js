/**Suponga que tiene un arreglo de 30 posiciones llenado de forma aleatoria con
números enteros entre 100 y 300, desarrolle una solución que recorra dicho arreglo y
separe en un segundo arreglo los números impares, al final imprima ambos arreglos */
eventListener();

function eventListener() {
  addEventListener("click", getArray);
}

function getArray() {
  let array = [];
  let arrayImpair = [];

  for (let i = 0; i < 30; i++) {
    array.push(Math.floor(Math.random() * (300 - 100) + 100));
    if ((i + 1) % 2 == 1) {
      arrayImpair.push(array[i]);
    }
  }
  console.log(arrayImpair);
  console.log(array);

  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("alert", "success");
  div.innerText = `Arreglo: ${array}
  Arreglo número impares: ${arrayImpair}`;

  output.appendChild(div);
}
