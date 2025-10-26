  function criarElementoInnerText(){

  const ul = document.getElementById("lista-de-elementos")

  const novaLi = document.createElement("li");
  novaLi.innerText = "Anderson Gouveia Lignelli";
  

  const novoInput = document.createElement("input");


  novaLi.appendChild(novoInput)

  ul.appendChild(novaLi);

}

function criarElementoInnerHtml() {

  const ul = document.getElementById("lista-de-elementos")

  // Continua

}


// innertext - texto - estilização css: elementos ocultos

// textContext - texto

// innerHtml - xonteudo htmml e texto