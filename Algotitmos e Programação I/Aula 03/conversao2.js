function MostrarCalculo() {
    var medicamento = document.getElementById("inMedicamento").value;
    var preco = Number(document.getElementById("inPreco").value);
    var resposta = document.getElementById("outResposta");
    var resposta2 = document.getElementById("outResposta2");
    var promo = Math.floor(preco) * 2;
    
    resposta.textContent = "Promoção de " + medicamento;
    resposta2.textContent = "Leve 2un por R$ " + promo;
}

var vtPromo = document.getElementById("vtPromo");
vtPromo.addEventListener("click", MostrarCalculo)