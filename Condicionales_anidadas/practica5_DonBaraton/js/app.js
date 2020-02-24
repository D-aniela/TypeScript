const button = document.getElementById('btnCalcular');
button.addEventListener('click', DescuentoTraje);

function DescuentoTraje(){
    let Precio = Number(document.getElementById('ipTraje').value);

    const descuento = document.getElementById('impDescuento');

    if(Precio >= 3600){
        descuento.innerText = Precio * .84;
    }else{
        descuento.innerText = Precio * .93;
    }
}