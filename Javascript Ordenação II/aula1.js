const {edGalho, edFolha} = require('./arrays1')

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    let atual = 0;

    while(posicaoAtual1 < lista1.length && posicaoAtual2 < lista2.length){
        let produtoAtual1 = lista1[posicaoAtual1];
        let produtoAtual2 = lista2[posicaoAtual2];

        if(produtoAtual1.preco < produtoAtual2.preco){
            listaFinal[atual] = produtoAtual1;
            posicaoAtual1++;
        } else {
            listaFinal[atual] = produtoAtual2;
            posicaoAtual2++;
        }
        atual++
    }

    while(posicaoAtual1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtual1];
        posicaoAtual1++
        atual++
    }

    while(posicaoAtual2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtual2];
        posicaoAtual2++
        atual++
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));