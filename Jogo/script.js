//pontuação dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;
//document.querySelector('#pontuacao-rodada-0').textContent = dado;
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');
var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var botaoPassaVez = document.querySelector("#botao-passar-vez");
var jogador = document.querySelector("#vencedor");
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];
var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
botaoLancarDado.addEventListener("click", function () {
 var dado = Math.floor(Math.random() * 6) + 1;
 if (dado == 1) {
 pontuacao[jogadorAtual] = 0;
 pontuacoesRodadas[jogadorAtual].textContent = 0;
 pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
 jogadorAtual = 1 - jogadorAtual;
 }
 else {
 pontuacao[jogadorAtual] += dado;
 pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
 pontuacoesRodadas[jogadorAtual].textContent = dado;
 vencer();
 }
});
//novo jogo
botaoNovoJogo.addEventListener("click", function () {
    pontuacao = [0, 0];
    pontuacoesRodadas[jogadorAtual].textContent = 0;
    pontuacoesGlobais[jogadorAtual].textContent = 0;
    pontuacoesRodadas[1 - jogadorAtual].textContent = 0;
    pontuacoesGlobais[1 - jogadorAtual].textContent = 0;
    var player1 = Math.floor(Math.random() * 2);
    jogadorAtual = player1;

});
//passar vez
botaoPassaVez.addEventListener("click", function () {
    jogadorAtual = 1 - jogadorAtual;
});
//ganhar jogo
function vencer() {
    if(pontuacao[jogadorAtual] >= 100){
    jogador.textContent = "Jogador" + (jogadorAtual + 1) + "Vence!!";
    pontuacao = [0, 0];
    pontuacoesRodadas[jogadorAtual].textContent = 0;
    pontuacoesGlobais[jogadorAtual].textContent = 0;
    pontuacoesRodadas[1 - jogadorAtual].textContent = 0;
    pontuacoesGlobais[1 - jogadorAtual].textContent = 0;
    jogadorAtual = 0;
    $("#Modal").modal();
    }
}