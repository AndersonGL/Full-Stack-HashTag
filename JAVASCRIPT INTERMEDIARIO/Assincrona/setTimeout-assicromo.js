// executa conforme os milisegundos

console.log("inicio do programa");

setTimeout(function () {
console.log("Ola mundo assicronomo");
},2000)

console.log("Aguardaando 1 seg");
console.log("Aguardando  2 seg");

setTimeout(function () {
console.log("Primeiro setTimeOut");
},1000)


console.log("termino do programa");
