// const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual
    }
  }
  return maisBarato;
}

module.exports = menorValor;

// const precosLivros = [25,15,30,50,45,20]

// // let menor = 0
// // for (let atual = 0; atual < precosLivros.length; atual++) {

// //     if(precosLivros[atual] < precosLivros[menor]){
// //         menor = atual
// //     }
// // }

// precosLivros.sort();
// console.log(precosLivros[0]);

// // console.log(precosLivros.sort());

// // precosLivros.sort()
// // precosLivros.reverse()
