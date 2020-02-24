const button = document.getElementById('btnCalcular');

button.addEventListener('click', PrecioPresupuesto);

function PrecioPresupuesto(){
    let Presupuesto = Number(document.getElementById('ipPresupuesto').value);
    let Precio1 = Number(document.getElementById('ipPrecio1').value);
    let Precio2 = Number(document.getElementById('ipPrecio2').value);
    let Precio3 = Number(document.getElementById('ipPrecio3').value);
    let Precio4 = Number(document.getElementById('ipPrecio4').value);

    let PrecioTotal = Precio1 + Precio2 + Precio3 + Precio4;

    let imprimir = document.getElementById('imprimirResultado');

    if(PrecioTotal < Presupuesto){
        imprimir.innerText = 'El precio está dentro del presupuesto';
    }else{
        imprimir.innerText = 'El precio está fuera del presupuesto';
    }
}