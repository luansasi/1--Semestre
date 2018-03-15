function MostraNumero() {
    var numero = document.getElementById("numero");
    var resposta = document.getElementById("resposta");
    var dobro = Number(numero.value) * 2;
    resposta.textContent = "O Dobro é " + dobro;
}
var dobrar = document.getElementById("dobrar");
dobrar.addEventListener("click", MostraNumero);