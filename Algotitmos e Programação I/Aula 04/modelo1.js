function MostrarCalculo() {
    var produto = document.getElementById("inProduto").value;
    var preco = Number(document.getElementById("inPreco").value);
    var resposta1 = document.getElementById("outResposta");
    var resposta2 = document.getElementById("outResposta2");
    var desconto = preco - (preco * 0.10);
    var parcela = preco / 3;
    resposta1.textContent = produto + " À Vista R$ " + desconto;
    resposta2.textContent = "Ou 3x de R$ " + parcela;
}

var vtRes = document.getElementById("vtRes");
vtRes.addEventListener("click", MostrarCalculo)