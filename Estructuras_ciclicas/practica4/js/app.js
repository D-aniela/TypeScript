/*Se requiere un algoritmo para determinar cuanto ahorrará una persona
en un año, si al final de cada mes deposita variables cantidades de dinero,
además desea conocer cuanto lleva ahorrado cada mes*/

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);
}

eventListener();

function initApplication() {
    let acumulador = 0;

    const listGroup = document.getElementById('ListaAhorro');
    
    for(let i=1; i<=12; i++){
        
        let saving = Number(prompt('Cuál es tu ahorro del mes? '));   
        
        acumulador+=saving;
        
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El dinero ahorrado en el mes ${i} es: ${acumulador}`;

        listGroup.appendChild(li);
    }
    
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText=`El dinero ahorrado en el año es: ${acumulador}`;

    listGroup.appendChild(li);
}