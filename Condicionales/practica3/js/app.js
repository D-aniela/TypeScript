const button = document.getElementById('btnEdad');

button.addEventListener('click', EdadMayor);

function EdadMayor(){

    let Edad1 = Number(document.getElementById('ipEdad1').value);
    let Edad2 = Number(document.getElementById('ipEdad2').value);
    let Nombre1 = document.getElementById('ipNombre1').value;
    let Nombre2 = document.getElementById('ipNombre2').value;

    const calcularEdad = document.getElementById('printEdad');
    if (Edad1>Edad2){
        calcularEdad.innerText = Nombre1;
    } else {
        calcularEdad.innerText = Nombre2;        
    }
}