const button = document.getElementById('btnCalcular');

button.addEventListener('click', DeterminarCostoTotal);

function DeterminarCostoTotal(){

    let Autobus = document.getElementById('selAutobus').value;
    let Kilometros = Number(document.getElementById('ipKilometros').value);
    let Cantidad = Number(document.getElementById('ipCantidad').value);

    let imprimirCosto = document.getElementById('imprimirCosto');

    
    if(Autobus == '1'){
        let AutobusA = (Kilometros * 1.5)*20;
        imprimirCosto.innerText = 'Costo Total : ' + AutobusA + " " + 'Costo por persona : ' + (AutobusA/Cantidad);
    }else if(Autobus == '2'){
        let AutobusB = (Kilometros * 2.0)*20;
        imprimirCosto.innerText = 'Costo Total : ' + AutobusB + " " + 'Costo por persona : ' + (AutobusB/Cantidad);
    }else if(Autobus == '3'){
        let AutobusC = (Kilometros * 2.5)*20;
        imprimirCosto.innerText = 'Costo Total : ' + AutobusC + " " + 'Costo por persona : ' + (AutobusC/Cantidad);
    }else{
        let AutobusD = (Kilometros * 3.0)*20;
        imprimirCosto.innerText = 'Costo Total : ' + AutobusD + " " + 'Costo por persona : ' + (AutobusD/Cantidad);
    }

}