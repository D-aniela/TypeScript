/**Dado un numero positivo, imprima el índex del numero de la serie FIBONACCI */
function eventListener() {
  button = document.getElementById("btnInit");
  button.addEventListener("click", Fibonacci);
}

function crearDom() {
  const output = document.getElementById("output");

  for (let x = 1; x <= 1; x++) {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.innerText = "Ingrese un número";

    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "number");
    input.setAttribute("id", "numero");

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  }

  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-dark btn-block");
  button.setAttribute("id", "btnInit");
  button.innerText = "Imprimir FIBONACCI";

  output.appendChild(button);
  eventListener();
}

function Fibonacci(){
    let numero = Number(document.getElementById('numero').value);    
        let num1 = 0;
        let num2 = 1;
    
        for(let x=1; x<=numero; x++){
            num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
    
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            li.innerText = num1;
            
            output.appendChild(li);
        }
}

crearDom();
