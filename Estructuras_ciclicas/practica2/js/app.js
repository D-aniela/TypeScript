// Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos.
EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion(){

    let NumeroAlumnos = Number(prompt('¿Cuántos alumnos son?'));

    let acumulador = 0;

    for(let i=1; i<=NumeroAlumnos; i++){
        let edad = Number(prompt(`Ingrese la edad del alumno ${i}`));
        // acumulador = acumulador + edad;
        acumulador += edad;
    }
    let resultado = acumulador/NumeroAlumnos;
    // console.log(resultado);

    let imprimir = document.getElementById('ZonePrint');
    imprimir.innerText = resultado;
}