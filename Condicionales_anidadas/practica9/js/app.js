const button = document.getElementById('btnCalcular');

button.addEventListener('click', NumerosDescendentes);

function NumerosDescendentes(){
    let a = Number(document.getElementById('ipNum1').value);
    let b = Number(document.getElementById('ipNum2').value);
    let c = Number(document.getElementById('ipNum3').value);

    let imprimirNum = document.getElementById('imprimir');

    if(a<b && a<c && b<c){
        imprimirNum.innerText = c + " " + b + " " + a;
    }else if(a<b && a<c && b>c){
        imprimirNum.innerText = b + " " + c + " " + a;
    }else if(a<b && a>c && b>c){
        imprimirNum.innerText = b + " " + a + " " + c;
    }else if(a>b && a<c && b<c){
        imprimirNum.innerText = c + " " + a + " " + b;
    }else if(a>b && a>c && b<c){
        imprimirNum.innerText = a + " " + c + " " + b;
    }else if(a>b && a>c && b>c){
        imprimirNum.innerText = a + " " + b + " " + c;
    }else{
        imprimirNum.innerHTML= 'Ingrese tres numeros diferentes'
    }
}