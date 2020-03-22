EventListener();

let array = [];
// let array = [0, 1, 10, 1, 10, 2, 10];
let outArray = [];
/**
 * length -- Regresa la longitud del array
 *
 * Opcion 1: Tomar array principal y a cada index impar sustituir su valor por un 0
 *
 * Opcion 2: Eliminar el ultimo elemento del array
 * pop - elimina el elemento en la ultima posicion del array
 *
 * Opcion 3: Agregar un elemento a la primera posicion del array
 * unshift - agrega un elemento a la primera posicion de array
 *
 * Opcion 4: Eliminar un elemento en la primera posicion del array
 * shift - eliminar el elemento
 *
 * Opcion 5: Econtrar todos los elementos con valor 10 y regresar en un array su posicion
 * indexOf() -- Regresa un index en caso de que no exista regresa un valor menos 1
 *
 * Opcion 6: Ordenar un array
 * .sort - acomodar arreglo
 *
 * Opcion 7: regresar el array invertido
 * .reverse
 *
 * Opcion 8: Los elementos 5 se cambiaran por "cinco"
 * .splice -- busca el valor que declaramos y lo elimina o lo reemplaza
 */
function EventListener() {
  document.getElementById("size").addEventListener("keypress", getSize);
  document.addEventListener("click", validarClick);
}

// Aqui se estara escuchando lo que hace el Enter
function getSize(e) {
  if (e.key != "Enter") return;
  if (e.target.value == "") return;
  //   Target es el archivo html al que se esta reaccionando
  if (isNaN(e.target.value)) return;
  if (e.target.value <= 0) return;

  //Le pasaremos un valor numerico
  createArray(e.target.value);
  e.target.value = "";
}

function createArray(size) {
  array = [];

  for (let i = 0; i < size; i++) {
    //   push - agrega elementos a la ultima posicion de un array
    array.push(Math.floor(Math.random() * (11 - 1) + 1));
  }
  console.log(array);
}

function validarClick(e) {
  switch (e.target.id) {
    case "op1":
      for (let i = 0; i < array.length; i++) {
        if ((i + 1) % 2 == 0) {
          outArray.push(0);
        } else {
          outArray.push(array[i]);
        }
      }
      console.log(outArray);
      break;

    case "op2":
      array.pop();
      console.log(array);
      break;

    case "op3":
      let random = Math.floor(Math.random() * (11 - 1) - 1);
      array.unshift(random);
      console.log(array);
      break;

    //   Eliminar el primer elemento del array
    case "op4":
      array.shift();
      console.log(array);
      break;

    case "op5":
      let indices = [];
      let index = array.indexOf(10);
      console.log(index);

      while (index != -1) {
        indices.push(index);
        index = array.indexOf(10, index + 1);
      }
      console.log(indices);
      console.log(array);
      break;

    case "op6":
      // Numeros - mayusculas y al final las minusculas
      console.log(array.sort());
      break;

    case "op7":
      console.log(array.reverse());
      break;

    case "op8":
        for(let i=0; i<array.length; i++){
            if(array[i] == 5){
                // Con dos parametros elimina el dato que estamos buscando
                // Con tres parametros lo elimina y entra el dato que ponemos en el tercer parametro
                array.splice(i, 1, 'cinco')
            }
            console.log(array);
        }
        break;

    default:
      return;
      break;
  }
}
//   // La funcion escucha cuando demos un click dentro de la pagina
//   // Va a reaccionar solo cuando tenga el target con el id
//   if (e.target.id == "op1") {
//     // console.log(e.target);
//     for (let i = 0; i < array.length; i++) {
//       // Si la posicion del array es par se cambiara por un 0
//       if ((i + 1) % 2 == 0) {
//         outArray.push(0);
//         // Si es impar, el array se queda con el mismo valor
//       } else {
//         outArray.push(array[i]);
//       }
//     }
//     console.log(outArray);
//   } else if (e.target.id == "op2") {
//     array.pop();
//     console.log(outArray);
//   } else return;
// }
