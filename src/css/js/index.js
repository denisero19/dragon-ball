const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerSelecaoBotao();
        selecionarBotao(botao);

        removerSelecaoPersonagem();
        selecionarPersonagem(indice);
    });
});    
 
function selecionarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function removerSelecaoBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

