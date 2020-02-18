const button = document.getElementById('btnCalcular');

button.addEventListener('click', calcularDiferencia);

function calcularDiferencia(){

    let Edad1 = Number(document.getElementById('ipEdad1').value);
    let Edad2 = Number(document.getElementById('ipEdad2').value);

    const DiferenciaEdad = document.getElementById('printEdad');

    if (Edad1 > Edad2){
        DiferenciaEdad.innerText = 'Edad del mayor: ' + Edad1 + " " + 'Diferencia de edad: ' + (Edad1-Edad2);
    }else{
        DiferenciaEdad.innerText = 'Edad del mayor: ' + Edad2 + " " + 'Diferencia de edad: ' + (Edad2-Edad1);
    }
}