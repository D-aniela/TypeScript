/**La conjetura de ULAM consiste en lo siguiente:
a. Inicia a partir de cualquier número positivo entero.
b. Si el número es par, se divide entre 2; si es impar, se multiplica por 3 y se agrega uno. 
De manera que podemos obtener lo siguiente: 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
Dado un numero positivo, ejecute la serie ULAM */

//Si es par / 2
//Si es impar (n x 3) + 1

function eventListener(){
    let button = document.getElementById('btnInit');

    button.addEventListener('click', ULAM);
}

eventListener();

function ULAM(){
    let numero = Number(prompt('Ingrese numero entero positivo'));
    const listGroup = document.getElementById('Numeros');
    
    while(numero!=1){
        
        if(numero %2==0){
            numero = numero/2;
        }else{
            numero = numero * 3 + 1;
        }
        
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = numero;
        listGroup.appendChild(li);
        
    }
}
