function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', ImprimirNumeros);
}

eventListener();

function ImprimirNumeros(){

    const listGroup = document.getElementById('Numeros');

    for(let x=0; x<=100; x++){
        // console.log(x);

        
        if (x%2!=1){
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            li.innerText = x;
    
            listGroup.appendChild(li);

        }
    }
}