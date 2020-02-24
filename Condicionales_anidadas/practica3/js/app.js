const button = document.getElementById('btnCalcular');

button.addEventListener('click', ObtenerPromedio);

function ObtenerPromedio(){
    const numero1 = Number(document.getElementById('ipCalificacion1').value);
    const numero2 = Number(document.getElementById('ipCalificacion2').value);
    const numero3 = Number(document.getElementById('ipCalificacion3').value);

    let resultado = (numero1 + numero2 + numero3)/3;
    
    // let impResultado = document.getElementById('imprimirStatus');
    const ZonePrint = document.getElementById('imprimirStatus');

    let cadena = `La calificación es: ${numero1} `;
    if(resultado >= 9){
        let divImprimir = `<div class="alert alert-success mt-5"><p> El alumno ha aprobado </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if(resultado>=6 && resultado<9){
        let divImprimir = `<div class="alert alert-warning mt-5"><p> El alumno es regular </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if(resultado < 6){
        let divImprimir = `<div class="alert alert-danger mt-5"><p> El alumno ha reprobado </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else{
        let divImprimir = `<div class="alert alert-danger mt-5"><p> Error </p></div>`;

        ZonePrint.innerHTML = divImprimir;

    }
}