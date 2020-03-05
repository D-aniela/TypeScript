/* Una empresa quiere el registro de las horas que trabaja diaramente un empleado
durante la semana (seis días) y requiere determinar el total de estas, así como
el sueldo que recibirá por las horas trabajadas.*/

let button;

function crearDom() {
  for (let x = 1; x <= 6; x++) {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.innerText = `Ingresa horas trabajadas del día ${x}`;

    const input = document.createElement("input");

    input.setAttribute("type", "number");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `inpNumero${x}`);

    output.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }
  for (let j = 1; j <= 1; j++) {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.innerText = "Ingrese sueldo por hora";

    const input = document.createElement("input");

    input.setAttribute("type", "number");
    input.setAttribute("class", "form-control col-2");
    input.setAttribute("id", `inpNumero2${j}`);

    output.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }

  const button = document.createElement("button");
  button.innerText = "Calcular horas trabajadas y sueldo";
  button.setAttribute("id", "btnInit");
  button.setAttribute("class", "btn btn-outline-success btn-block col-6");

  output.appendChild(button);

  eventListener();
}

function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", imprimirTotal);
}

function imprimirTotal() {
  let acumulador = 0;
  let sueldo = 0;
  
  for (let i = 1; i <= 6; i++) {
    let horas = Number(document.getElementById(`inpNumero${i}`).value);
    acumulador += horas;
    for (let h = 1; h <= 1; h++) {
      let sueldoHora = Number(document.getElementById(`inpNumero2${h}`).value);
      sueldo = sueldoHora*acumulador;
    }
  }
  console.log(acumulador);

  const div = document.createElement("div");
  div.classList.add("form-group");
  div.setAttribute("class", "alert alert-primary mt-5 col-3");
  div.setAttribute("role", "alert");
  div.setAttribute("id", "imprimir");
  div.innerText = `Horas trabajadas por semana : ${acumulador}
  Sueldo por horas trabajadas : ${sueldo}`;

  output.appendChild(div);
}

crearDom();
