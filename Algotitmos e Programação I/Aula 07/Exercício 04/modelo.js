function MostrarCalculo() {
    var inConta = document.getElementById("inConta");
    var resposta = document.getElementById("outResposta");
    
    var conta = Number(inConta.value);
    var contaT = Math.ceil(conta);
    var doacao = contaT - conta;

    resposta.textContent = "Você pode doar R$ " + doacao + " para a Santa Casa e pagar R$ " + contaT;
    
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);