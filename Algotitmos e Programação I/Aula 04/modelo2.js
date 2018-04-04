function MostrarCalculo() {
    var produto = document.getElementById("inProduto").value;
    var preco = document.getElementById("inPreco").value;
    var resposta1 = document.getElementById("outResposta");
    var resposta2 = document.getElementById("outResposta2");
    var desconto = preco / 2;
    var precoTotal = (preco * 2) + desconto;

    resposta1.textContent = "Leve 3 " + produto + " por R$ " + precoTotal;
    resposta2.textContent = "O 3º custa apenas R$ " + desconto;
}


var vtRes = document.getElementById("vtRes");
vtRes.addEventListener("click", MostrarCalculo)