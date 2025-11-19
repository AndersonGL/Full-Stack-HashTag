document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    resetarMensagensDeErro();

    if (!validarCamposObrigatorios()) {
      event.preventDefault(); // Impede o envio do formulário se houver campos obrigatórios não preenchidos
    }
    if (!compararValores()) {
      event.preventDefault(); // Impede o envio do formulário se os valores não coincidirem
    }
  });

  function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll(".Obrigatorio");
    //  console.log(camposObrigatorios);

    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];

      if (campo.value === "" || campo.value === null) {
        exibirErro(campo, "Este campo é obrigatório.");
        camposValidos = false;
      }
    }
    return camposValidos;
  }

  function compararValores() {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
      exibirErro (confirmarSenha, "As senhas não coincidem.");
      return false;
    }
      return true;
  }

function exibirErro(elemento, mensagem) {
  let mensagemErro = elemento.parentElement.querySelector(".error-message");
  mensagemErro.innerText = mensagem;
  mensagemErro.style.display = "inline-block"; // exibe a mensagem de erro
}

function resetarMensagensDeErro() {
  let mensagensErro = document.querySelectorAll(".error-message");
  mensagensErro.forEach(msg => {
    msg.textContent = "";
    msg.style.display = "inline-block"; // opcional: esconder também
  });
}
 });