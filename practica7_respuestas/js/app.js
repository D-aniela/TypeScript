let correcta;
let incorrecta;
let blanco;

let puntajeFinal;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', respuestas);

function respuestas(){
    correcta = Number(document.getElementById('ipCorrectas').value);
    incorrecta = Number(document.getElementById('ipIncorrectas').value);
    blanco = Number(document.getElementById('ipBlanco').value);

    puntajeFinal = (correcta * 4) + (incorrecta * -1) + (blanco * 0);

    let imprimirPuntaje = document.getElementById('imprimirPuntaje');

    imprimirPuntaje.innerText = puntajeFinal;
}