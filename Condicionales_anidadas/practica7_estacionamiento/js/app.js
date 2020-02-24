const button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularTarifa);

function CalcularTarifa(){
    let Horas = document.getElementById('ipHoras').value;

    let totalTarifa = document.getElementById('imprimirTarifa');

    if(Horas <= 2){
        totalTarifa.innerText = Horas * 5;
    }else if(Horas <=5 && Horas >2){
        totalTarifa.innerText = Horas * 4;
    }else if(Horas <=10 && Horas >5){
        totalTarifa.innerText = Horas * 3;
    }else{
        totalTarifa.innerText = Horas * 2;
    }
}