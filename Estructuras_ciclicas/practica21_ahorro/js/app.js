/**16. Determinar cuánto ahorrará en pesos una persona diariamente, y en un año, si ahorra 3¢ el
primero de enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente todo el año.  */

function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', calcularAhorro);
}

eventListener();

function calcularAhorro(){
    const listGroup = document.getElementById('listaAhorro');

    let ahorroDia = 3;
    let acumulador = 0;

    for(let x=1; x<=365; x++){
        ahorroDia = ahorroDia*3;
        acumulador += ahorroDia;

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText=`Ahorro por día ${x}: ${acumulador}`;
        listGroup.appendChild(li);
        console.log(acumulador);
    }
}