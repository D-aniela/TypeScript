let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularBono);

function CalcularBono(){

    let Años = Number(document.getElementById('ipAños').value);
    let Sueldo = Number(document.getElementById('ipSueldo').value);

    let Resultado = document.getElementById('impBono');

    if(Años > 2 && Años < 5){
        Resultado.innerText = Sueldo * .2;
    }else if(Años > 5){
        Resultado.innerText = Sueldo * .3;
    }else if(Sueldo < 1000){
        Resultado.innerText = Sueldo * .25;
    }else if(Sueldo > 1000 && Sueldo <= 3500){
        Resultado.innerText = Sueldo * .15;
    }else{
        Resultado.innerText = Sueldo * .1;
    }
}