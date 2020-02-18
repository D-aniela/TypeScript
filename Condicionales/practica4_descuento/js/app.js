const button = document.getElementById('btnCalcular');

button.addEventListener('click', CalcularDescuento);

function CalcularDescuento(){

    let Cantidad = Number(document.getElementById('ipCantidad').value);

    const totalDescuento = document.getElementById('printDescuento');

    if(Cantidad >= 1000){
        totalDescuento.innerText = Cantidad * .8;
    } else {
        totalDescuento.innerText = 'No aplica descuento';
    }
}