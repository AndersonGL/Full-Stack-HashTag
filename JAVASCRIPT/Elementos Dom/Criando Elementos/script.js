  function criarElemento() {
            // Criar um novo elemento HTML
            const ul = document.getElementById('lista-de-elementos');

            // Criar um novo item de lista
            const novali = document.createElement('li');

            // Criar um novo campo de entrada
            const novoInput = document.createElement('input');

            // Adicionar o campo de entrada ao item da lista
            novali.appendChild(novoInput);

            // Adicionar o item da lista ao elemento ul
            ul.appendChild(novali);
        }