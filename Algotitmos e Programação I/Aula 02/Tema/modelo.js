function MostrarCalculo() {
    var preco = Number(document.getElementById("preco").value);
    var metade = preco / 2;
    var parcela = metade / 12;
    
    respostaUm.textContent = "Promoção do " + veiculo.value;
    respostaDois.textContent = "Entrada: R$ " + metade;
    respostaTres.textContent = "Saldo em 12x R$ " + parcela.toFixed(2);
}

var veiculo = document.getElementById("veiculo");

var calcular = document.getElementById("calcular"); 
calcular.addEventListener("click", MostrarCalculo);