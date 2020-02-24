const button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularPresupuesto);

function CalcularPresupuesto(){

    const personas = Number(document.getElementById('ipPersonas').value);
    
    const Presupuesto = document.getElementById('imprimirPresupuesto');

    if(personas < 200){
        Presupuesto.innerText = personas * 95;
    }else if(personas >= 200 && personas <= 300){
        Presupuesto.innerText = personas * 85;
    }else{
        Presupuesto.innerText = personas * 75;
    }
}