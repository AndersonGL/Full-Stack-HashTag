//Exemplo de objeto para envio de dados

// const objeto = {
//   nome: "Anderson",
//   idade: 30,
//   cidade: "São Paulo"
// };

// formData para envio de dados para dentro do servidor

// Crie formData = (nome: Anderson , email: lignelli77@gmail.com);

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário se houver campos obrigatórios não preenchidos

    let dados = new FormData(formulario);

    // Exibir os dados no console
    for ([chave, valor] of dados.entries()) {
      console.log(chave + ": " + valor);
    }
  });
});
