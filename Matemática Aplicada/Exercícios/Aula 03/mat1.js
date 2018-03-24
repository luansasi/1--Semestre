function verInteresse() {
    
    var nome = document.getElementById("inNome").value;
    var idade = Number(document.getElementById("inIdade").value);
    var salario = Number(document.getElementById("inPretencao").value);
    var resposta = document.getElementById("outResposta");
    
    if (idade >= 20 && idade <= 30 && salario >= 2000 && salario <= 3000) {
        resposta.textContent = nome + " você foi selecionado!";
    } else {
        resposta.textContent = nome + " procure outra vaga...";
    }
}

var btVaga = document.getElementById("btVaga");
btVaga.addEventListener("click", verInteresse);