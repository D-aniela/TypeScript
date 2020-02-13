let ladoA;
let ladoB;

let suma;
let resultado;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', ObtenerHipotenusa);

function ObtenerHipotenusa(){

    ladoA = Number(document.getElementById('ipLadoA').value);
    ladoB = Number(document.getElementById('ipLadoB').value);

    suma = Math.pow(ladoA, 2) + Math.pow(ladoB, 2);
    resultado = Math.sqrt(suma);

    let imprimirHipotenusa = document.getElementById('imprimirHipotenusa');

    imprimirHipotenusa.innerText = resultado;
}