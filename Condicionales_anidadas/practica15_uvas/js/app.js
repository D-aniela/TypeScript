let button = document.getElementById('btnCalcular');

button.addEventListener('click', CantidadRecibida);

function CantidadRecibida(){

    let Kilos = Number(document.getElementById('ipKilos').value);
    let precio = Number(document.getElementById('ipPrecio').value);
    let TipoUva = document.getElementById('selTipoUva').value;
    let Tamano = document.getElementById('selTamUva').value;

    let Cantidad = document.getElementById('imprimirResultado');

    if(TipoUva == '1' && Tamano == '1'){
        let precioA = precio + .20;
        Cantidad.innerText = 'Ganancia obtenida : ' + precioA * Kilos;
    }else if(TipoUva == '1' && Tamano == '2'){
        let precioB = precio + .30;
        Cantidad.innerText = 'Ganancia obtenida : ' + precioB * Kilos;
    }else if(TipoUva == '2' && Tamano == '1'){
        let precioC = precio - .30;
        Cantidad.innerText = 'Ganancia obtenida : ' + precioC * Kilos;
    }else{
        let precioD = precio - .50;
        Cantidad.innerText = 'Ganancia obtenida : ' + precioD * Kilos;
    }
}