  function criarElementoInnerText() {

  const ul = document.getElementById("lista-de-elementos")

  const novaLi = document.createElement("li");
  novaLi.innerText = "Anderson Gouveia Lignelli ";
  const novoInput = document.createElement("input");
  novaLi.appendChild(novoInput)
  ul.appendChild(novaLi);

}

function criarElementoInnerHtml() {

    const ul = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    novaLi.innerHTML = '<input type = "text" />';
    ul.appendChild(novaLi); 
}

function criarElementoTextContent() {

  const ul = document.getElementById("lista-de-elementos");
  const novaLi = document.createElement("li");
  const novoInput = document.createElement("input");
  novaLi.textContent= "Atribuindo conteudo: "
  novaLi.appendChild(novoInput); 
  ul.appendChild(novaLi); 

}

// innertext - texto - estilização css: elementos ocultos

// textContext - texto

// innerHtml - xonteudo htmml e texto