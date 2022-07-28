const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notas){
    const somaNotas = notas.reduce((acum, atual) => 
    atual + acum, 0)
    return somaNotas/notas.length
}

console.log(mediaSala(salaJS))
console.log(mediaSala(salaJava))
console.log(mediaSala(salaPython))

const notas = [10, 6.5, 8, 7.5]
const media = notas.reduce((acum,atual) => atual + acum, 0) / notas.length
console.log(media)