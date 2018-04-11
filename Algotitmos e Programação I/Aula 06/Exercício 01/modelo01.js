function MostrarCalculo() {
    
    var inPeso = document.getElementById("inPeso");    
    var inConsumo = document.getElementById("inConsumo");
    var resposta = document.getElementById("outResposta");
    var resposta2 = document.getElementById("outResposta2");

    var peso = Number(inPeso.value);
    var consumo = Number(inConsumo.value);
    var pesogramas = peso * 1000;
    var duracao = Math.floor(pesogramas / consumo);
    var sobra = pesogramas % consumo;


    resposta.textContent = "A duração é de " + duracao + " dias.";
    resposta2.textContent = "Sobra: " + sobra + ".";
    
    document.querySelector('#quadro_resposta').style.display = 'block';
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);