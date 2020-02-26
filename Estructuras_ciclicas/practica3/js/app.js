/* Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas,
cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando
se tenga una estatura registrada.*/
EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApp);
}

function initApp(){
    let continuar = true;
    let acumulador = 0;
    let contador = 0;

    // while(continuar==true) Es igual que sin ==true
    while(continuar){
        let estatura = Number(prompt('Ingrese la estatura'));

        if(estatura==0){
            continuar = false;
        }

        acumulador+=estatura;
        contador++; 
    }

    let resultado = acumulador/(contador-1);

    console.log(resultado);
}