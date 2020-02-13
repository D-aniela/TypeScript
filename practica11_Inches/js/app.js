let metros;

let resultado;
const pulgadas = 39.3701;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularInches);

function CalcularInches(){
    metros = Number(document.getElementById('ipMetros').value);

    resultado = metros * pulgadas;

    let imprimirPulgadas = document.getElementById('imprimirPulgadas');

    imprimirPulgadas.innerText = resultado;
}