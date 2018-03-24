
function MostrarConversao() {
    var titulo = document.getElementById("titulo").value;
    var duracao = Number(document.getElementById("duracao").value);
    var horas = 0;
    var minutos = 0;

    while (duracao >= 60) {
        duracao = duracao - 60;
        horas ++;
    }

    minutos = duracao ;


    resposta.textContent = "Filme: " + titulo;
    resposta2.textContent = "Duração: " + horas + " hora e " + minutos + " minutos.";
}


var apertar = document.getElementById("apertar");
apertar.addEventListener("click", MostrarConversao);