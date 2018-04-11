function MostrarCalculo() {
    
    // captura os elementos da pagina
    var vel_permitida = Number(document.getElementById("inVel_Permitida").value);
    var vel_condutor = Number(document.getElementById("inVel_Condutor").value);
    var resposta = document.getElementById("OutResposta");

    if (vel_condutor == 0 || vel_permitida == 0 || isNaN(vel_condutor) || isNaN(vel_permitida)){
        alert("Preencha o campo novamente!");
        inVel_Permitida.textContent = "";
        inVel_Condutor.textContent = "";
        inVel_Permitida.focus();
        return;

    }

    var porcentagem = vel_permitida + (vel_permitida * 0.2);
    
    if (vel_condutor <= vel_permitida){
        resposta.textContent = "Sem multa!";
    }else if (vel_condutor >= vel_permitida && vel_condutor <= porcentagem ){
        resposta.textContent = "Situação: multa Leve!";
    }else{
        resposta.textContent = "Situação: multa Grave!";
    }
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);