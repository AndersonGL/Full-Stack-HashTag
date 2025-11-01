let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
  meuElemento.classList.add("circle"); // class add = adiciona o elemento
  meuElemento.classList.remove("square"); // xlass remove = remove o elemento
}

function tornarQuadrado() {
  meuElemento.classList.add("square");
  meuElemento.classList.remove("circle");
}

function alternarFormato() {
  meuElemento.classList.toggle("circle"); // Class Toggle Serve para altenar elementos.
  meuElemento.classList.toggle("square");
}

function verificarClasse() {
  if (meuElemento.classList.contains("circle")) {
    console.log("O elemento posssui a classe circle");
  } else {
    console.log("O elemento possui a classe square");
  }
}
