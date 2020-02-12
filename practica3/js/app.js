let base;
let altura;
let resultado;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', multiplicar);

function multiplicar(){
    base = Number(document.getElementById('ipBase').value);
    altura = Number(document.getElementById('ipAltura').value);

    resultado = (base * altura)/2

    let imprimirResultado=document.getElementById('imprimirResultado');

    imprimirResultado.innerText=resultado;
}