//  getAttribute - Obter o valor do atributo
//  setAttribute - Modificar o valor do atributo


function changeImage() { 
  const img =  document.getElementById("myImage");
  const currentSrc = img.getAttribute("src");  // Pega o valor do atributo src
  if (currentSrc === "imagem1.png") {         
    img.setAttribute("src", "imagem2.png");  // Modifica o valor do atributo src
     img.setAttribute("alt", "Professor Daniel"); //Modifica o valor do atributo alt
  }else {
    img.setAttribute("src", "imagem1.png");
    img.setAttribute("alt", "Sinueta de uma pessoa");

  }
}

function  changeType() {
  const input = document.getElementsByTagName("input")[0];
  const currentType = input.getAttribute("type");

  switch (currentType) {

    case "text":
     input.setAttribute("type", "number");
      break;
     case "number":
     input.setAttribute("type", "radio");
     break;
     case "radio":
     input.setAttribute("type", "range");
     break;
      default:
     input.setAttribute("type", "text");

     
}
}