let velocidad;
let tiempo;
let distancia;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', multiplicar);

function multiplicar(){
    velocidad = Number(document.getElementById('ipVelocidad').value);
    tiempo = Number(document.getElementById('ipTiempo').value);

    distancia = velocidad * tiempo;

    let resultadoDistancia = document.getElementById('imprimirDistancia');

    resultadoDistancia.innerText=distancia;
}