let button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularCapicua);

function CalcularCapicua(){
    let numero0 = Number(document.getElementById('ipNumero').value);

    let Capicua = document.getElementById('imprimirResultado');

    let entero1 = Math.floor(numero0/10);
    let decimal1 = numero0 % 10;
    
    let entero2 = Math.floor(entero1/10);
    let decimal2 = entero1 % 10;
    
    let entero3 = Math.floor(entero2/10);
    let decimal3 = entero2 % 10;

    let mult1 = decimal1 * 1;
    let mult2 = decimal2 * 10;
    let mult3 = decimal3 * 100;

    let mult4 = decimal1 * 100;
    let mult5 = decimal2 * 10;
    let mult6 = decimal3 * 1;

    let resultado1 = mult1 + mult2 + mult3;
    let resultado2 = mult4 + mult5 + mult6;

    // if(numero0 >= 100 && numero0 < 1000){

    if(numero0 > 999){
        Capicua.innerText = 'Ingrese número de 3 dígitos';
    }else if(numero0 < 100){
        Capicua.innerText = 'Ingrese número de 3 dígitos';
    }else if(resultado1 == resultado2){
        Capicua.innerText = 'El número es capicua';
    }else{
        Capicua.innerText = 'El número no es capicua';
    }
}