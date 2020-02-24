const button = document.getElementById('btnCifras');

button.addEventListener('click', CalcularCifras);

function CalcularCifras(){
    let numero = Number(document.getElementById('ipNumero').value);

    let Cifras = document.getElementById('imprimirCifra');

    if(numero < 10){
        Cifras.innerText = 'La cifra es de un dígito';
    }else if(numero < 100){
        Cifras.innerText = 'La cifra es de dos dígitos';
    }else if(numero < 1000){
        Cifras.innerText = 'La cifra es de tres dígitos';
    }else{
        Cifras.innerText = 'error';
    }
}