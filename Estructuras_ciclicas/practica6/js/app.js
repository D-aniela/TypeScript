function eventListener(){
    let button = document.getElementById('btnInit');
    button.addEventListener('click', ImprimirNumeros);
}

eventListener();

function ImprimirNumeros(){

    const listGroup = document.getElementById('Numeros');

    for(let x=100; x>=0; x--){
        console.log(x);

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = x;

        listGroup.appendChild(li);
    }
}