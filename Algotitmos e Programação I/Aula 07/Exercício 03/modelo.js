function MostrarCalculo() {
    var inNumero = document.getElementById("inNumero");
    var resposta = document.getElementById("outResposta");
    
    var numero = Number(inNumero.value);
    var numerof = 0;

    if (numero % 2 == 0){
        numerof = numero + 2;    
        resposta.textContent = "Próximo par é: " + numerof;
    }else{
        numerof = numero + 1;
        resposta.textContent = "Próximo par é: " + numerof;
    }
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);