const display = document.querySelector('.display');

function alteraHorario(){
    
    const horario = new Date();
    
    const relogio =correcaoHorario(horario.getHours())  + ":" + correcaoHorario(horario.getMinutes()) + ":" + correcaoHorario(horario.getSeconds());

    display.textContent =  relogio;

}

function correcaoHorario(numero){
    if (numero < 10) {
        numero = '0'+ numero
    }
    return numero;
}
alteraHorario()
setInterval(alteraHorario , 1000)