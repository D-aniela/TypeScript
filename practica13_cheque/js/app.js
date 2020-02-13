let dias;
let comida;
let hotel;

const pesos=100;

let resultadoMonto;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', MontoCheque);

function MontoCheque(){

    dias = Number(document.getElementById('ipDias').value);
    comida = Number(document.getElementById('ipComida').value);
    hotel = Number(document.getElementById('ipHotel').value);

    resultadoMonto = dias * (comida+hotel) + pesos;

    let imprimirMonto = document.getElementById('imprimirMonto');

    imprimirMonto.innerText=resultadoMonto;
}