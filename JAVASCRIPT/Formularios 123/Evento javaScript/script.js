// Evento de submit
document.addEventListener('DOMContentLoaded', function() {
    let formulario = document.getElementById('meuFormulario');
  
     formulario.addEventListener('submit', function() {
            alert('Formulário enviado!');
});
});

// Seleciona elemento input - tipo texto
let compoTexto = document.getElementById('campoTexto');

// Evento de change
compoTexto.addEventListener('change', function() {
    console.log('Campo de texto foi alterado para: ' + compoTexto.value);
});

// Evento de focus
compoTexto.addEventListener('focus', function() {
    console.log('Campo de texto está em foco.');
});

// Evento de blur
compoTexto.addEventListener('blur', function() {
    console.log('Campo de texto perdeu o foco.');
});