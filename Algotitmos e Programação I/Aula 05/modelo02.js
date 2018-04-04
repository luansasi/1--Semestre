function MostrarCalculo() {
    var numero = Number(document.getElementById("inNumero").value);
    var resultado = document.getElementById("outResposta");

    if (numero % 2) {
        resultado.textContent = numero + " é ímpar.";
    } else {
        resultado.textContent = numero + " é par."
    }

}

btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);