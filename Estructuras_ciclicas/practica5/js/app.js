/*Se requiere un algoritmo para determinar, de N cantidades, cuantas son menores
o iguales a 0 y cuantas mayores a 0*/

function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);
}

eventListener();

function initApplication(){
    const cantidades = Number(prompt('Cuántos números evaluarás?'));

    let acumuladorMenores = 0;
    let acumuladorMayores = 0;

    for(let x=0; x<cantidades; x++){
        let Numero = Number(prompt('Número a evaluar'));

        if(Numero <= 0){
            acumuladorMenores++;
        }else{
            acumuladorMayores++;
        }
        const print = document.getElementById('ZonePrint');
        print.innerText = `Número menores: ${acumuladorMenores}
        Números mayores: ${acumuladorMayores}`;
    }

}