// Passando o metodo como globoal para utilizar no código

 
const lista = document.getElementById("list");


// Preciso Criar o Itens de forma ordenada dentro da lista ao clicar no botão "Adicionar Item"

function adicionarItem() {
 
  const novali = document.createElement("li");
  novali.textContent = "Novo Item:";

  lista.appendChild(novali)

}

// Preciso Remover o último item da lista ao clicar no botão "Remover Item"

function removerItem() {

  // Removendo o ultimo item da lista

 const ultimoItem = lista.lastElementChild;
  lista.removeChild(ultimoItem);

// Removendo o primeiro Item da lista

  //const primeiroItem = lista.firstElementChild;
 // lista.removeChild(primeiroItem);



}



