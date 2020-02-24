let button = document.getElementById('btnCapicua');

button.addEventListener('click', CapicuaTrue);

function CapicuaTrue(){

    let Numero = Number(document.getElementById('ipNumero').value);

    let imprimir = document.getElementById('imprimir');

    let entero1 = Math.floor(Numero/10);
    let decimal1 = Numero % 10;
    
    let entero2 = Math.floor(entero1/10);
    let decimal2 = entero1 % 10;
    
    let entero3 = Math.floor(entero2/10);
    let decimal3 = entero2 % 10;

    let entero4 = Math.floor(entero3/10);
    let decimal4 = entero3 % 10;

    let mult1 = decimal1 * 1;
    let mult2 = decimal2 * 10;
    let mult3 = decimal3 * 100;
    let mult4 = decimal4 * 1000;

    let mult5 = decimal1 * 1000;
    let mult6 = decimal2 * 100;
    let mult7 = decimal3 * 10;
    let mult8 = decimal4 * 1;

    let resultado3 = mult1 + mult2;
    let resultado4 = mult7 + mult8;
    
    let resultado1 = mult1 + mult2 + mult3;
    let resultado2 = mult6 + mult7 + mult8;


    if(Numero > 9999){
        imprimir.innerText = 'Ingrese número entre 0 y 9,999';
    }else if(resultado3 == resultado4){
            imprimir.innerText = 'El número es capicúa';
    }else{
        imprimir.innerText = 'El número no es capicúa';
    }
}