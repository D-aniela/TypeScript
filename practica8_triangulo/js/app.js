let ladoA;
let ladoB;
let ladoC;
let semiperimetro

let resultadoArea;
let resultadoRaiz;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularArea);

function CalcularArea(){
    ladoA = Number(document.getElementById('ipLadoA').value);
    ladoB = Number(document.getElementById('ipLadoB').value);
    ladoC = Number(document.getElementById('ipLadoC').value);
    semiperimetro = Number(document.getElementById('ipSemiperimetro').value);

    resultadoRaiz = (semiperimetro*((semiperimetro - ladoA)*(semiperimetro - ladoB)*(semiperimetro - ladoC)));
    resultadoArea = Math.sqrt(resultadoRaiz);

    let imprimirArea = document.getElementById('imprimirArea');

    imprimirArea.innerText=resultadoArea;
}