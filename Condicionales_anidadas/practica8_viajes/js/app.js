const button = document.getElementById('btnCalcular');

button.addEventListener('click', LugarVacaciones);

function LugarVacaciones(){
    let Kilometros = Number(document.getElementById('ipKilometros').value);
    let Presupuesto = Number(document.getElementById('ipPresupuesto').value);

    let resultadoViaje = document.getElementById('imprimirResultado');

    let Mexico = (Kilometros * 750)*2;
    let PtoV = (Kilometros * 800)*2;
    let Acapulco = (Kilometros * 1200)*2;
    let Cancun = (Kilometros * 1800)*2;
    if(Presupuesto < Mexico){
        resultadoViaje.innerText = 'Quedarse en casa';
    }else if(Presupuesto < PtoV){
        resultadoViaje.innerText = 'Destino Mexico';
    }else if(Presupuesto < Acapulco){
        resultadoViaje.innerText = 'Destino Puerto Vallarta';
    }else if(Presupuesto < Cancun){
        resultadoViaje.innerText = 'Destino Acapulco';
    }else{
        resultadoViaje.innerText = 'Destino Cancún'
    }
}