let button = document.getElementById('btnCalcular');

button.addEventListener('click', PromedioPracticas);

function PromedioPracticas(){
    let califA = Number(document.getElementById('ipCalif1').value);
    let califB = Number(document.getElementById('ipCalif2').value);
    let califC = Number(document.getElementById('ipCalif3').value);
    let califD = Number(document.getElementById('ipCalif4').value);

    let Promedio = document.getElementById('imprimirPromedio');

    if(califA < califB && califA < califC && califA < califD){
        let PromedioA = (califB + califC + califD)/3
        Promedio.innerText = 'Promedio :' + " " + PromedioA + " " + 'Calificación eliminada :' + califA;
    }else if(califB < califA && califB < califC && califB < califD){
        let PromedioB = (califA + califC + califD)/3
        Promedio.innerText = 'Promedio :' + " " + PromedioB + " " + 'Calificación eliminada :' + califB;
    }else if(califC < califA && califC < califB && califC < califD){
        let PromedioC = (califA + califB + califD)/3
        Promedio.innerText = 'Promedio :' + " " + PromedioC + " " + 'Calificación eliminada :' + califC;
    }else{
        let PromedioD = (califA + califB + califC)/3
        Promedio.innerText = 'Promedio :' + " " + PromedioD + " " + 'Calificación eliminada :' + califD;
    }
}