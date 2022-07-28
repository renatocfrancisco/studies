const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0

// for (let i = 0; i < notas.length; i++){
//     somaNotas += notas[i]
// }

array.forEach()

notas.forEach(nota => {
    somaNotas += nota
});

let media= somaNotas/notas.length
console.log(media)