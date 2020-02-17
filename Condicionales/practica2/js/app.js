const button = document.getElementById('btnResultado');

button.addEventListener('click', verificarCalifiacion);

function verificarCalifiacion() {

    let Calificacion = Number(document.getElementById('ipCalificacion').value);

    const DivCalificacion = document.getElementById('PrintAlert')

    if (Calificacion >= 8){
        DivCalificacion.innerText = 'Aprobado';
    } else {
        DivCalificacion.innerText = 'Reprobado';
        
        const AudioDonRamon = document.getElementById('ReprobadoAudio');
        AudioDonRamon.play();
    }
}