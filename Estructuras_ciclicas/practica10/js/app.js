/**El empleado de la tienda “Tiki Taka” realiza N ventas durante el día, se requiere saber cuántas
de ellas fueron mayores a $1000, cuantas fueron mayores a $500 pero menores o iguales a
$1000, y cuantas fueron menores o iguales $500. Además, se requiere saber el monto de lo
vendido en cada categoría y de forma global. */

function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', imprimirVenta);
}
// Venta > 1000
// Venta > 500 && <=1000
// Venta <=500
// Monto vendido por categoría
// Monto vendido total

eventListener();

function imprimirVenta(){
    const cantidadVenta = Number(prompt('Cuántas ventas se realizaron?'));

    let ventaMayor = 0;
    let ventaMedia = 0;
    let ventaMenor = 0;
    let ventaTotal = 0;

    for(let x=0; x<cantidadVenta; x++){
        let ingVenta = Number(prompt('Ingrese cantidad : '));

        if(ingVenta > 1000){
            ventaMayor++;
        }else if(ingVenta > 500 && ingVenta <= 1000){
            ventaMedia++;
        }else{
            ventaMenor++;
        }

        ventaTotal += ingVenta;

        const print = document.getElementById('ZonePrint');
        print.innerText = `Ventas mayores a $1000 : ${ventaMayor}
        Ventas menores a $1000 y mayores a $500 : ${ventaMedia}
        Ventas menores a $500 : ${ventaMenor}
        Total Venta : ${ventaTotal}`
        

    }
}