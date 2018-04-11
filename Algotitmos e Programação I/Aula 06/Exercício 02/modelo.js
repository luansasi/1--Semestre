function MostrarCalculo() {
    var saque = Number(document.getElementById("inSaque").value);
    var resposta = document.getElementById("outResposta");
    var resposta02 = document.getElementById("outResposta02");
    var resposta03 = document.getElementById("outResposta03");
    document.querySelector('.caixa_resposta').style.display = 'block';
    
    var nota100 = saque / 100;
    var resto = saque % 100;
    var nota50 = resto / 50;
        resto = resto % 50;
    var nota10 = resto / 10;
        resto = resto % 10;


    if ( resto == 0 ){
        
        resposta.textContent = Math.floor(nota100);
        resposta02.textContent = Math.floor(nota50);
        resposta03.textContent = Math.floor(nota10);
    

    }else {
        resposta.textContent = "se fudeu";
        resposta02.textContent = "";
        resposta03.textContent = "";
    }
    
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", MostrarCalculo);