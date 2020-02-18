const button = document.getElementById('btnCalcular');

button.addEventListener('click', PrecioDescuento);

function PrecioDescuento(){
    let Nombre = document.getElementById('ipNombreArt').value;
    let Clave = Number(document.getElementById('ipClaveArt').value);
    let Precio = Number(document.getElementById('ipPrecioArt').value);

    const totalDescuento = document.getElementById('printDatos');

    if (Clave == 01){
        totalDescuento.innerText = Nombre + "  " + Clave + "  " + 'Precio Original: ' + Precio + "  " + 'Precio con descuento: ' + (Precio * .9);
    }else if (Clave == 02){
        totalDescuento.innerText = Nombre + "  " + Clave + "  " + 'Precio Original: ' + Precio + "  " + 'Precio con descuento: ' + (Precio * .8);
    }else{
        totalDescuento.innerText = Nombre + "  " + Clave + "  " + 'Precio Original: ' + Precio;
    }

}
