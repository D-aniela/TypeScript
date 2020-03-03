/**Los datos reunidos en la secretaría de industrias relacionado con la producción de N fábricas en
cada uno de los meses: se proporcionan de la siguiente forma:
a. Los totales anuales de producción de cada fabrica.
b. La clave de la fábrica que más produjo en el año. Indicar también el total de la
producción.
c. Imprimir claves de las fabricas cuya producción en el mes de julio fueron superiores a
los $3,000,000 */
function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', datos);
}

eventListener();

function datos(){
    
    let cantFabrica = Number(prompt('Ingrese cantidad de Fábricas'));
    const listGroup = document.getElementById('listaProduccion');
    let montoMayor = 0;
    let fabricasVentaMayor='';
    
    for(let x=1; x<=cantFabrica; x++){
        let claveFabrica = String(prompt(`Ingrese clave de Fábrica  ${x}`));
        
        let acumulador = 0;
        for(let y=1; y<=12; y++){    
            let producAnual = Number(prompt(`Ingrese producción mes: ${y}`));
            acumulador += producAnual;
            
            if(y == 7 && producAnual > 3000000){
                const imprimir = document.getElementById('imprimir');
                imprimir.innerText = `Fábricas con ventas mayor a $3,000,000 en Julio : ${claveFabrica}`;
            }
            
        }
        if(montoMayor<acumulador){
            montoMayor=acumulador;
            fabricasVentaMayor=claveFabrica;
            const imprimir2 = document.getElementById('imprimir2');
            imprimir2.innerText = `Fábrica que produjo más en el año : ${fabricasVentaMayor}`;
            
        }
        const imprimir3 = document.getElementById('imprimir3');
        imprimir3.innerText = `Total anual de fábricas: ${acumulador}`;
        console.log(acumulador);
    }

}