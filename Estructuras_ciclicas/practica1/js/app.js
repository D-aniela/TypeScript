// let acumulador = 0;
// for (let ValorInicial = 1; ValorInicial <= 10; ValorInicial++);{
     
//     let NumeroIngresado = Number(prompt('Ingrese el numero'));
    
//     acumulador = acumulador + NumeroIngresado;

//     console.log(acumulador);
// }

// const ZonaImprimir = document.getElementById('output');

// ZonaImprimir.innerText = acumulador;

let button;

function crearDom(){
    
    const output = document.getElementById('output');
    for(let x = 1 ; x <= 5; x++){

        const div = document.createElement('div');
        div.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText=`Ingresa el número : ${x}`;

        const input = document.createElement('input');

        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `inpNumero${x}`);
        
        output.appendChild(div);

        div.appendChild(label);
        div.appendChild(input);
    }
    
    const button = document.createElement('button');
    button.innerText = "Calcular Suma";
    button.setAttribute('id', 'btnCalcularSuma');
    button.setAttribute('class', 'btn btn-outline-success btn-block');
    
    output.appendChild(button);

    EventListener();
    
}

// Aqui agregaremos todos los elementos que tengamos
function EventListener(){
    
    button=document.getElementById('btnCalcularSuma');
    button.addEventListener('click', suma);
}

function suma() {
    let acumulador = 0;
    
    for(let i=1; i<=5; i++){
        let numero = Number(document.getElementById(`inpNumero${i}`).value)
        acumulador = acumulador + numero;
    }

    console.log(acumulador);
}
crearDom();