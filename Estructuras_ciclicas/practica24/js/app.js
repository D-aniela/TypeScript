/**Escriba un programa que imprima los números de siguiente serie “5, 7, 10, 12, 15, 17, …, n” 
 hasta que la suma de los números sea = 1,800. */

 function eventListener(){
     let button = document.getElementById('btnInit');
     button.addEventListener('click', imprimirNumeros);
 }

 eventListener();

 function imprimirNumeros(){
     let numero = 0;
     let bandera = true;
     let acumulador = 0;
     const listGroup = document.getElementById('listaNumeros');

    while(bandera){
        acumulador += numero;

        if(numero%5 == 0){
            numero += 2
        }else{
            numero += 3
        }
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item')
        li.innerText = numero;
        listGroup.appendChild(li);
        if(numero==1800){
            bandera=false;
        }
    }

 }