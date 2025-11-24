
// Repete a cada 2 segundos a "tarefa sendo feitas"

console.log("Inicio");

setInterval(() =>  {
console.log('Tarefas sendo feitas');

}, 3000);

setInterval(() =>  {
  (for index = 0; index < 5; index++){
console.log(`Tarefas ${index}`);

}, 1000);

console.log('fim');
