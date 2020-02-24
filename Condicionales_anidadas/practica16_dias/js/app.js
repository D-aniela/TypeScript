let button = document.getElementById('btnCalcular');

button.addEventListener('click', DiaDeLaSemana);

function DiaDeLaSemana(){
    let DiaSemana = document.getElementById('selDiaSemana').value;

    let imprimir = document.getElementById('imprimir');

    if(DiaSemana == '1'){
        imprimir.innerText = 'Lunes';
    }else if(DiaSemana == '2'){
        imprimir.innerText = 'Martes';
    }else if(DiaSemana == '3'){
        imprimir.innerText = 'Miércoles';
    }else if(DiaSemana == '4'){
        imprimir.innerText = 'Jueves';
    }else if(DiaSemana == '5'){
        imprimir.innerText = 'Viernes';
    }else if(DiaSemana == '6'){
        imprimir.innerText = 'Sábado';
    }else{
        imprimir.innerText = 'Domingo';
    }
}