let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularPoliza);

function CalcularPoliza(){

    let TipoPoliza = document.getElementById('selTipoPoliza').value;
    let Alcohol = document.getElementById('selAlcohol').value;
    let Lentes = document.getElementById('selLentes').value;
    let Enfermedad = document.getElementById('selEnfermedad').value;
    let Edad = document.getElementById('selEdad').value;

    let imprimir = document.getElementById('imprimir');

    if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '1' && Enfermedad == '1' && Edad == '1'){
        let resultado1 = 1200 + (1200 * .1) + (2400 * .5) + (1200 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultado1;
    }else if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '1' && Enfermedad == '1' && Edad == '2'){
        let resultado2 = 1200 + (1200 * .1) + (2400 * .5) + (1200 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultado2;
    }else if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '1' && Enfermedad == '2' && Edad == '1'){
        let resultado3 = 1200 + (1200 * .1) + (1200 * .5) + (1200 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultado3;
    }else if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '2' && Enfermedad == '1' && Edad == '1'){
        let resultado4 = 1200 + (1200 * .1) + (1200 * .5) + (1200 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultado4;
    }else if(TipoPoliza == '1' && Alcohol == '2' && Lentes == '1' && Enfermedad == '1' && Edad == '1'){
        let resultado5 = 1200 + (2400 * .5) + (1200 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultado5;
    }else if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '1' && Enfermedad == '2' && Edad == '2'){
        let resultado6 = 1200 + (1200 * .1) + (1200 * .5) + (1200 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultado6;
    }else if(TipoPoliza == '1' && Alcohol == '1' && Lentes == '2' && Enfermedad == '2' && Edad == '2'){
        let resultado7 = 1200 + (1200 * .1) + (1200 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultado7;
    }else if(TipoPoliza == '1' && Alcohol == '2' && Lentes == '2' && Enfermedad == '2' && Edad == '2'){
        imprimir.innerText = 'Costo de Póliza : ' + '1200' + (1200 * .1);
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '1' && Enfermedad == '1' && Edad == '1'){
        let resultadoB1 = 960 + (960 * .1) + (1920 * .5) + (960 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB1;
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '1' && Enfermedad == '1' && Edad == '2'){
        let resultadoB2 = 960 + (960 * .1) + (1920 * .5) + (960 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB2;
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '1' && Enfermedad == '2' && Edad == '1'){
        let resultadoB3 = 960 + (960 * .1) + (960 * .5) + (960 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB3;
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '2' && Enfermedad == '1' && Edad == '1'){
        let resultadoB4 = 960 + (960 * .1) + (960 * .5) + (960 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB4;
    }else if(TipoPoliza == '2' && Alcohol == '2' && Lentes == '1' && Enfermedad == '1' && Edad == '1'){
        let resultadoB5 = 960 + (960 * .1) + (1920 * .5) + (960 * .2);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB5;
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '1' && Enfermedad == '2' && Edad == '2'){
        let resultadoB6 = 960 + (960 * .1) + (960 * .5) + (960 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB6;
    }else if(TipoPoliza == '2' && Alcohol == '1' && Lentes == '2' && Enfermedad == '2' && Edad == '2'){
        let resultadoB7 = 960 + (960 * .1) + (960 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB7;
    }else if(TipoPoliza == '2' && Alcohol == '2' && Lentes == '2' && Enfermedad == '2' && Edad == '2'){
        let resultadoB8 = 960 + (960 * .1);
        imprimir.innerText = 'Costo de Póliza : ' + resultadoB8;
    }
}