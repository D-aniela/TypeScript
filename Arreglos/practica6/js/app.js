/**
 * 1. Llenar dos arreglos (A, B) de manera aleatoria:
 a. Realizar C = A+B
 b. Realizar C = B-A
c. Realizar C = B*A
El usuario podrá elegir que opción de C desea ver en pantalla, también podrá ver el
vector A y B para comprobar los resultados, el rango de los números aleatorios para los
Vectores será de [-100 a 100], la longitud de los Vectores es la misma, por lo tanto,
solo se solicitará una vez.
*/

function eventListener() {
  document.getElementById("TamanoArray").addEventListener("keypress", InitApp);
  document.addEventListener("click", realizarOperaciones);
}

eventListener();
let arrayUno = [];
let arrayDos = [];

function InitApp(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (isNaN(event.target.value)) return;
  if (event.target.value <= 0) return;

  FillArray(event.target.value);
  event.target.value = "";
}

function FillArray(TamanoArray) {
  let sumaUno = 0;
  let sumaDos = 0;

  for (i = 0; i < TamanoArray; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (101 + 100)) - 100;
    arrayUno.push(numeroAleatorio);
    sumaUno += arrayUno[i];
    numeroAleatorio = Math.floor(Math.random() * (101 + 100)) - 100;
    arrayDos.push(numeroAleatorio);
    sumaDos += arrayDos[i];
  }

  console.log(arrayUno);
  console.log(arrayDos);
  console.log(sumaUno);
  console.log(sumaDos);
}

function realizarOperaciones(event) {
  let resultado = 0;
  let suma = 0;
  let sumaDos = 0;

  switch (event.target.id) {
    case "op1":
      for (i = 0; i < arrayUno.length; i++) {
        suma += arrayUno[i];
        sumaDos += arrayDos[i];

        resultado = suma + sumaDos;
      }

      const opcion1 = document.getElementById("imprimir1");
      opcion1.innerText = resultado;

      break;

    case "op2":
      for (i = 0; i < arrayUno.length; i++) {
        suma += arrayUno[i];
        sumaDos += arrayDos[i];

        resultado = sumaDos - suma;
      }
      const opcion2 = document.getElementById("imprimir2");
      opcion2.innerText = resultado;
      break;
      
      case "op3":
        for (i = 0; i < arrayUno.length; i++) {
          suma += arrayUno[i];
          sumaDos += arrayDos[i];
          
          resultado = suma * sumaDos;
        }
        const opcion3 = document.getElementById("imprimir3");
        opcion3.innerText = resultado;
        break;
      }
      const opcion4 = document.getElementById("imprimir4");
      opcion4.innerText = `El arreglo A es:  ${arrayUno}
      El arreglo B es:  ${arrayDos}`;
}
