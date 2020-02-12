let radio;

const constantePi = 3.1416;

let button= document.getElementById('btnCalcular');

button.addEventListener('click', AreaCirculo);

function AreaCirculo(){
    radio = Number(document.getElementById('InpRadio').value);

    // resultado = constantePi * (radio*radio);
    let radioElevado = Math.pow(radio, 2);

    resultado = radioElevado * Math.PI;

    let imprimirResultado = document.getElementById('imprimirResultado');

    imprimirResultado.innerText=resultado;
}