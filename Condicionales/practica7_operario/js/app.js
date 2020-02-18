const button = document.getElementById('btnCalcular');

button.addEventListener('click', IncentivosUnidades);

function IncentivosUnidades(){

    let Lunes = Number(document.getElementById('ipLunes').value);
    let Martes = Number(document.getElementById('ipMartes').value);
    let Miercoles = Number(document.getElementById('ipMiercoles').value);
    let Jueves = Number(document.getElementById('ipJueves').value);
    let Viernes = Number(document.getElementById('ipViernes').value);
    let Sabado = Number(document.getElementById('ipSabado').value);

    let TotalUnidades = Lunes + Martes + Miercoles + Jueves + Viernes + Sabado;
    const DeclararIncentivos = document.getElementById('CalcularIncentivos');

    if(TotalUnidades >= 100){
        DeclararIncentivos.innerText = 'Recibirá incentivos';
    }else{
        DeclararIncentivos.innerText = 'No recibirá incentivos';
    }
}