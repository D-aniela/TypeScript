let button = document.getElementById('btnMultiplo');

button.addEventListener('click', Multiplo);

function Multiplo(){
    let Num1 = Number(document.getElementById('ipNum1').value);
    let Num2 = Number(document.getElementById('ipNum2').value);

    let esMultiplo = document.getElementById('impResultado');

    if(Num1 % Num2 == 0){
        esMultiplo.innerText=('El número es múltiplo');
    }else if(Num2 % Num1 == 0){
        esMultiplo.innerText=('El número es múltiplo');
    }else{
        esMultiplo.innerText=('El número no es múltiplo');
    }
}