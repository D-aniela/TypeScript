const button = document.getElementById('btnCalcular');

button.addEventListener('click', TrianguloIdentificar);

function TrianguloIdentificar(){

    let lado1 = Number(document.getElementById('ipLongitud1').value);
    let lado2 = Number(document.getElementById('ipLongitud2').value);
    let lado3 = Number(document.getElementById('ipLongitud3').value);

    const nombreTriangulo = document.getElementById('printTriangulo');

    if(lado1 == lado2 && lado2 == lado3){
        nombreTriangulo.innerText = 'Triángulo Equilátero';
        
    }else if(lado1 != lado2 && lado2 != lado3){
        nombreTriangulo.innerText = 'Triángulo escaleno';
        
    }else{
        nombreTriangulo.innerText = 'Triángulo isósceles';
    }
}