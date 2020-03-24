/**Dados dos arreglos numéricos del mismo tamaño (A, B), generar un tercer arreglo que
combine los numero de A y B ordenados de manera descendente. */

eventLister();

function eventLister() {
  document.getElementById("tamanoArray").addEventListener("keypress", getSize);
}

function getSize(e) {
  if (e.key != "Enter") return;
  if (e.target.value == "") return;
  if (e.target.value <= 0) return;
  if (isNaN(e.target.value)) return;

  createArray(e.target.value);
}

let array1 = [];
let array2 = [];
let array3 = [];

function createArray(tamanoArray) {
  for (let i = 0; i < tamanoArray; i++) {
    array1.push(Math.floor(Math.random() * (1000 - 1) + 1));
    array2.push(Math.floor(Math.random() * (1000 - 1) + 1));
    array3 = array1.concat(array2);
  }
  array3.sort();
  array3.reverse();

    // console.log(array1);
    // console.log(array2);
    // console.log(array3);
  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("class", "alert-primary");
  div.innerText = array3;

  output.appendChild(div);
}
