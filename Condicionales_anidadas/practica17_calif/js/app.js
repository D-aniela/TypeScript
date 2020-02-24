let button = document.getElementById('btnCalcular');

button.addEventListener('click', LetraCorresponde);

function LetraCorresponde(){

    let Calificacion = Number(document.getElementById('ipCalificacion').value);

    let Letra = document.getElementById('ImprimirLetra');

    if(Calificacion == 10){
        Letra.innerText = 'A';
    }else if(Calificacion >= 9 ){
        Letra.innerText = 'B';
    }else if(Calificacion >= 8){
        Letra.innerText = 'C';
    }else if(Calificacion >= 7 && Calificacion >= 6){
        Letra.innerText = 'D';
    }else if(Calificacion >= 0){
        Letra.innerText = 'F';
    }else{
        Letra.innerText = 'Ingrese calificación del 0 - 10';
    }
}