function MostrarCalculo() {
    var horario = Number(document.getElementById("inHorario").value);
    var resposta = document.getElementById("outResposta");
    var franca = 0;

    if (horario + 5 > 23) {
        horario = horario + 5;
        franca = horario - 24;
    } else {
        franca = horario + 5;
    }
    
    resposta.textContent = "Hora da França: " + franca + "hora(s).";
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo)