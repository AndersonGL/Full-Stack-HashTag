

function minhaOperacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random() > 0.5; // 50% sucesso

      if (sucesso) {
        resolve("Operação concluída com sucesso!");
      } else {
        reject("Falha na operação");
      }
    }, 2000);
  });
}

console.log(minhaOperacaoAssincrona()); // Estado inicial
