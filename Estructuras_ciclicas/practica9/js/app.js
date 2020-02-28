/*Una persona se encuentra en el kilómetro 70 de la carretera Aguascalientes Zacatecas, otra se
encuentra en el km 150 de la misma carretera, la primera viaja en dirección a Zacatecas,
mientras que la segunda se dirige a Aguascalientes, a la misma velocidad. Realice un algoritmo
para determinar en qué kilómetro de esa carretera se encontrarán*/ 

function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', puntoEncuentro);
}

eventListener();

function puntoEncuentro(){
    let Aguascalientes = 70;
    let Zacatecas = 150;
    let bandera = true;

    while(bandera){
        Aguascalientes++;
        Zacatecas--;
        if(Aguascalientes==Zacatecas){
            bandera = false;
        }
        const print = document.getElementById('print');
        print.innerText = `Se encontrarán en el Kilómetro: ${Aguascalientes}`;
    }
}