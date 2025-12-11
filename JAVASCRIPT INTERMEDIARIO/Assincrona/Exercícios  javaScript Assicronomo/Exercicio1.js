// Primeiro Exercício

// Call back Simples

// Escreva uma função imprimirMEnsagem que aceita uma mensagem e uma função 
// de chamada de callBack. A função deve imprimir a mensagem no console e, em seguida, invocar a função d retorno de chamada


function imprimirMensagem(mensagem, callback) {
  console.log(mensagem);
  callback("Mensagem impressa com sucesso!");
}


imprimirMensagem("Olá!", (resultado) => {
  console.log("Callback:", resultado);
});
