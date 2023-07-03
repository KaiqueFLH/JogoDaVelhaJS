const quadrados = document.getElementsByClassName("quadrado");
const tabuleiro = document.getElementById("tictactoe");
let vezJogador = 0;
let jogadorAtual = "jogador1";


for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener("click", function () {
        if (jogadorAtual == "jogador1" && !quadrados[i].classList.contains("jogador2")) {
            quadrados[i].classList.add("jogador1");

        } else if (jogadorAtual == "jogador2" && !quadrados[i].classList.contains("jogador1")) {
            quadrados[i].classList.add("jogador2");
        }

        if (verificaGanhador(jogadorAtual)) {
            quadrados[i].classList.add(jogadorAtual);
            setTimeout(() => {
                alert(jogadorAtual + " Venceu o Jogo!");
                reiniciaJogo();
            }, "100");
        }
        console.log(vezJogador)
        if (vezJogador === quadrados.length-1) {
            quadrados[i].classList.add(jogadorAtual);
            setTimeout(() => {
                alert("O jogo terminou em empate!");
                reiniciaJogo();
            }, "100");
        }
        jogadorAtual = jogadorAtual == "jogador1" ? "jogador2" : "jogador1"
        vezJogador++;
    })
}

function reiniciaJogo() {
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].classList.remove("jogador1", "jogador2");
    }
    vezJogador = 0;
    jogadorAtual = "jogador1";

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