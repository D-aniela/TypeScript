let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularRegalo);

function CalcularRegalo(){
    let Presupuesto = Number(document.getElementById('ipPresupuesto').value);

    let Regalo = document.getElementById('impRegalo');

    if(Presupuesto <= 10){
        Regalo.innerText = 'Regalar Tarjeta';
    }else if(Presupuesto > 10 && Presupuesto <= 100){
        Regalo.innerText = 'Regalar Chocolates';
    }else if(Presupuesto > 99 && Presupuesto <= 250){
        Regalo.innerText = 'Regalar Flores';
    }else{
        Regalo.innerText = 'Regalar anillo';
    }
}