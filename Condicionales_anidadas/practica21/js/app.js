let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularPrecio);

function CalcularPrecio(){
    let Kilogramos = Number(document.getElementById('ipKilogramos').value);
    let Pais = document.getElementById('selPaises').value;

    let Resultado = document.getElementById('impResultado');

    if(Kilogramos > 5){
        Resultado.innerText = 'No pueden transportarse paquetes mayores a 5 kg';   
    }else if(Pais == '1'){
        Resultado.innerText = "$" + Kilogramos * 11;
    }else if(Pais == '2'){
        Resultado.innerText = "$" + Kilogramos * 10;
    }else if(Pais == '3') {
        Resultado.innerText = "$" + Kilogramos * 12;
    }else if(Pais == '4'){
        Resultado.innerText = "$" + Kilogramos * 24;
    }else{
        Resultado.innerText = "$" + Kilogramos * 27;
    }
}