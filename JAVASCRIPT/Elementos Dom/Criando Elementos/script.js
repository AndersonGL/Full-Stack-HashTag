function criarElemento () {

    // criar um novo elemento HTML
    const ul = document.getElementById('lista-de-elementos');

    const body = document.body;

    console.log(body);

    const novali = document.createElement('li');

    const novoInput =  document.createElement('input');
    
    console.log("Adicionando um novo inputs e lis");
    body.appendChild(novoInput);

    //novali.appendChild(novoInput);


    //console.log("Adicionando uma nova li");

   // ul.appendChild(novali);
 
 }
