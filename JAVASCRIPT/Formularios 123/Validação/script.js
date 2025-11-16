function validarFormulario() {

    // Obter o valor do campo de texto

const campoTexto = document.getElementById('campoTexto')
let valorCampo = campoTexto.value;

    // Verificar se o campo está vazio

if (valorCampo === "") {

    alert("Favor preencher o campo de texto!");
    return false;   // Impede o envio do formulário
} else {

    return true;    // Permite o envio do formulário

}
}


