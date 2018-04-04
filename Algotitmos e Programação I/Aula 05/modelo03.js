function MostrarCalculo() {
    var numero = Number(document.getElementById("inNumero").value);
    var resultado = document.getElementById("outResposta");
    var raiz = Math.sqrt(numero);

    if (numero == 0 || isNaN(numero)) {
        alert ("Por favor, informe um número válido")
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    if (Math.floor(raiz) == raiz) {
        resultado.textContent = "Raiz é " + raiz;
    } else {
        resultado.textContent = numero + " não tem raiz.";
    }
}

btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);