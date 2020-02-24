const button = document.getElementById('idbtn');

button.addEventListener('click', CompararNumeros);

function CompararNumeros(){

    const numero1 = Number(document.getElementById('ipNum1').value);
    const numero2 = Number(document.getElementById('ipNum2').value);
    const numero3 = Number(document.getElementById('ipNum3').value);

    let Resultado = document.getElementById('imprimirResultado');

    if(numero1 > numero2){
        if(numero1 > numero3){
            Resultado.innerText = ('numero1');
        }else{
            alert('numero3');
        }
    }else if (numero2 > numero3){
        Resultado.innerText = 'numero2';
    }else{
        Resultado.innerText = 'numero3';
    }
}