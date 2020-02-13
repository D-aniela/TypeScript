let longitud;
let ancho;
let altura;

let resultado;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularMetrosCubicos);

function CalcularMetrosCubicos(){
    longitud = Number(document.getElementById('ipLongitud').value);
    ancho = Number(document.getElementById('ipAncho').value);
    altura = Number(document.getElementById('ipAltura').value);

    resultado = longitud * ancho * altura;

    let imprimirResultado = document.getElementById('imprimirMetros');

    imprimirResultado.innerText = resultado;
}