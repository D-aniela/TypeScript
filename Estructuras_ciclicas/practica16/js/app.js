/**Desarrolle una solución que lea un numero M, obtenga y cuente todos los números primos
menores a M. */
function eventListener() {
  let button = document.getElementById("btnInit");
  button.addEventListener("click", numerosPrimos);
}

eventListener();

function numerosPrimos() {
  let numero = Number(prompt("Ingrese un número entero positivo"));
  let bandera = true;
  const listGroup = document.getElementById('listaNumeros');

  for (let x = 0; x <= numero; x++) {
    bandera = true;

    for (let y = 2; y < x; y++) {
      if (x % y == 0) {
        bandera = false;
      }
    }
    if (bandera == true) {
      console.log(x);

      const li = document.createElement('li');
      li.setAttribute('class', 'list-group');
      li.innerText = x;
      listGroup.appendChild(li);
      
    }
  }
}
