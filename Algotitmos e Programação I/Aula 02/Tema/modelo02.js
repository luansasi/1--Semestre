function MostrarCalculo() {
    var preco = Number(document.getElementById("preco").value);
    var consumo = Number(document.getElementById("consumo").value);
    var gramas = consumo / 1000;
    var precoFinal = gramas * preco;
    resposta.textContent = "O preço do prato é: R$" + precoFinal.toFixed(2);
}

var calcular = document.getElementById("calcular");
calcular.addEventListener("click", MostrarCalculo);