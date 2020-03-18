/**Crea un array de números de un tamaño pasado por teclado, el array contendrá números aleatorios
 * primos entre los números deseados, por último nos indica cual es el mayor de todos
 */

/**Haz un método para comprobar que el número aleatorio es primo, puedes hacer todos los métodos
 * que necesites
 */

EventListener();

let ArregloNumerosPrimosGlobal = [];

function FillArrayGlobal() {
  for (let i = 0; i < 1000; i++) {
    let bandera = true;

    for (let y = 2; y < i; y++) {
      if (i % y == 0) {
        bandera = false;
        break;
      }
    }
    if (bandera) {
      // El push ingresa al arreglo un dato nuevo
      ArregloNumerosPrimosGlobal.push(i);
    }
  }

  console.log(ArregloNumerosPrimosGlobal);
}

function EventListener() {
  document.addEventListener("DOMContentLoaded", FillArrayGlobal);
  document.getElementById("TamanoArray").addEventListener("keypress", InitApp);
}

function InitApp(event) {
  // Para que una funcion retorne un valor o para salirse de la funcion
  //   Se verifica que haya dado enter primero
  if (event.key != "Enter") return;
  //   Luego verifica si esta vacío
  if (event.target.value == "") return;
  //   Verifica si es menor o igual a cero
  if (event.target.value <= 0) return;
  //   Verifica el valor
  if (isNaN(event.target.value)) return;
  //   No se ejecuta la función hasta no realizar lo que se requiere
  FillArray(event.target.value);
}

// tamanoArray es el parametro que recibe la funcion
function FillArray(TamanoArray) {
  let ArregloNumerosPrimos = [];
  let maxValue = ArregloNumerosPrimos;
  let suma = 0;

  for (let i = 0; i < TamanoArray; i++) {
    let numeroAleatorio =
      Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1;

    ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);

    maxValue = Math.max(...ArregloNumerosPrimos);
    suma += ArregloNumerosPrimosGlobal[numeroAleatorio];
  }
  const ZonePrint = document.getElementById("imprimir");
  const ZonePrint2 = document.getElementById("imprimirSuma");

  ZonePrint.innerText = "Número mayor del arreglo : " + maxValue;
  ZonePrint2.innerText = "Suma del arreglo : " + suma;

  console.log(ArregloNumerosPrimos);
}
