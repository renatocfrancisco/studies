const notas = [10,9,8,7,6]

const notasAtua = notas.map(
    nota => nota == 10 ? nota : ++nota)

console.log(notasAtua)

const alunos = ['ana Julia', 'Caio vinicius', 'BIA silva']
const alunosAtua = alunos.map(
    nome => nome.toUpperCase()
)

console.log(alunosAtua)