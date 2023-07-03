const quadrados = document.getElementsByClassName("quadrado");
const tabuleiro = document.getElementById("tictactoe");
let vezJogador = 0;
let jogadorAtual = "";

for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener("click", function () {
        if (vezJogador % 2 == 0 && !quadrados[i].classList.contains("jogador2")) {
            quadrados[i].classList.add("jogador1");
            jogadorAtual = "jogador1";
            vezJogador++;
        } else if(vezJogador % 2 != 0 && !quadrados[i].classList.contains("jogador1")) {
            quadrados[i].classList.add("jogador2");
            jogadorAtual = "jogador2";
            vezJogador++;
        }
        

        if (verificaGanhador(jogadorAtual)) {
            alert(jogadorAtual + " Venceu o Jogo!");
            reiniciaJogo();
        }
        else if (vezJogador === quadrados.length) {
            alert("O Jogo Terminou em Empate!");
            reiniciaJogo();
        }
    });
}

function reiniciaJogo() {
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].classList.remove("jogador1", "jogador2");
    }
    vezJogador = 0;
    jogadorAtual = "";

}

function verificaGanhador(jogador) {
    let condicoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for (condicao of condicoesVitoria) {
        if (quadrados[condicao[0]].classList.contains(jogador) &&
            quadrados[condicao[1]].classList.contains(jogador) &&
            quadrados[condicao[2]].classList.contains(jogador)) {
            return true;
        }
    }
    return false
}