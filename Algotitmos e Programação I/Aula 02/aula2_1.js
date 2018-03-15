function MostrarNome() {
    var nome = document.getElementById("nome");
    var resposta = document.getElementById("resposta");

    resposta.textContent = "Olá " + nome.value;
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", MostrarNome);