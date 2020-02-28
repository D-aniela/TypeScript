/* Una empresa quiere el registro de las horas que trabaja diaramente un empleado
durante la semana (seis días) y requiere determinar el total de estas, así como
el sueldo que recibirá por las horas trabajadas.*/  

function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', sumaHoras);
}

eventListener();

function sumaHoras(){

    let sueldo = Number(prompt('Ingrese sueldo por hora'));

    let acumulador = 0;
    const listGroup = document.getElementById('ListaHoras');

    for (let x=0; x<=6; x++){
        let saving = Number(prompt('Ingrese horas trabajadas por día'));

        acumulador+=saving;

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Las horas totales por semana son : ${acumulador}`;

        listGroup.appendChild(li);
    }

    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = `Sueldo total por horas trabajadas : ${sueldo*acumulador}`;

    listGroup.appendChild(li);
}