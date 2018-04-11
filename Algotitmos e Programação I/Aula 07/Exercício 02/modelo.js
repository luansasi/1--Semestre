function MostrarCalculo() {
    var inPreco = document.getElementById("inPreco");
    var resposta = document.getElementById("outResposta");
    var resposta2= document.getElementById("outResposta2");
    
    var preco = Number(inPreco.value);

    var porcentagem = preco * 0.1;
    var total = porcentagem + preco;
    
    resposta.textContent = "Garçom R$: " + porcentagem.toFixed(2);
    resposta2.textContent = "Total R$: " + total.toFixed(2);

}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);