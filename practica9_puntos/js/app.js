let puntox1;
let puntoy1;
let puntox2;
let puntoy2;

let resultadoDistancia;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularDistancia);

function CalcularDistancia(){
    puntox1 = Number(document.getElementById('ipPuntoA1').value);
    puntoy1 = Number(document.getElementById('ipPuntoA2').value);
    puntox2 = Number(document.getElementById('ipPuntoB1').value);
    puntoy2 = Number(document.getElementById('ipPuntoB2').value);
    
    resultadoDistancia = Math.sqrt((Math.pow((puntox2-puntox1), 2) + Math.pow((puntoy2-puntoy1), 2)));

    let imprimirDistancia = document.getElementById('imprimirDistancia');

    imprimirDistancia.innerText = resultadoDistancia;
}