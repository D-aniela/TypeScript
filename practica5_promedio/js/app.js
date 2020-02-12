let num1;
let num2;
let num3;
let num4;
let num5;
let Matricula;

let resultado;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', suma);

function suma(){
    num1 = Number(document.getElementById('Calificacion1').value);
    num2 = Number(document.getElementById('Calificacion2').value);
    num3 = Number(document.getElementById('Calificacion3').value);
    num4 = Number(document.getElementById('Calificacion4').value);
    num5 = Number(document.getElementById('Calificacion5').value);
    Matricula = Number(document.getElementById('Matricula').value);

    resultado = (num1 + num2 + num3 + num4 + num5)/5;
    NumMatricula = Matricula;

    let Promedio = document.getElementById('imprimirPromedio');

    Promedio.innerText=resultado;

    let rMatricula = document.getElementById('imprimirMatricula');

    rMatricula.innerText=NumMatricula;

}