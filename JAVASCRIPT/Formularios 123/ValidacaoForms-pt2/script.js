document.addEventListener("DOMContentLoaded", function() {
  const formulario  = document.getElementById("meuFormulario");
  
  formulario.addEventListener("submit", function(event) {
     if (!validarCamposObrigatorios()) {
      event.preventDefault();  // Impede o envio do formulário se houver campos obrigatórios não preenchidos

     }

  // event.preventDefault(); 
    function validarCamposObrigatorios() {
      let camposObrigatorios = document.querySelectorAll(".Obrigatorio");
    //  console.log(camposObrigatorios);

      let camposValidos = true;

      for (let i = 0; camposObrigatorios.length > i; i++) {
        let campo = camposObrigatorios[i];

        if (campo.value === "" || campo.value === null) {
          console.log(`O campo ${campo.name} é obrigatório.`);
          camposValidos = false;

        }
    } // 0,1,2,3
    
      return camposValidos;
  }
   

  });
});
