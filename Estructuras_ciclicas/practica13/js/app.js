/**Dado un numero positivo, imprima el índex del numero de la serie FIBONACCI */

function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', fibonacci);
}

eventListener();

function fibonacci(){
    let numero = Number(prompt('Ingrese numero entero positivo'));
    const listGroup = document.getElementById('listaNumeros');

    let num1 = 0;
    let num2 = 1;

    for(let x=1; x<=numero; x++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = num1;
        listGroup.appendChild(li);
    }
}