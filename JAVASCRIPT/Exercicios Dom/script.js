// onmouseover="this.style.color='red';"
// onmouseout="this.style.color='black';"

function mudarCor(elemento,cor) {
    elemento.style.color=cor;
}

// onclick="alert('Botão Clicado');"

function clicarBotao() {
    alert('Botão Clicado');

}

//  onfocus="this.value='Campo em focus';"
//  onblur="this.value='';"

function campoemFoco(elemento) {
    elemento.value='Campo em focus';
}

function campoForaDeFoco(elemento) {
    elemento.value='';
}

// onmouseover="this.src='imagem2.png';"
// // onmouseout="this.src='imagem1.png';"

function trocarImagem(elemento, novaImagem) {
    elemento.src=novaImagem;
}

function voltarImagem(elemento, imagemOriginal) {
    elemento.src=imagemOriginal;
}