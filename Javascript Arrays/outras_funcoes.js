const nomes = ['Pedro','Adriel','Renato','João']
const s1 = nomes.slice(1,nomes.length/2)
const s2 = nomes.slice(nomes.length/2)
console.log('Slice')
console.log(s1)
console.log(s2)

console.log('Splice')
s3 = nomes.splice(1,2,'Kaique')
console.log(s3)
console.log(nomes)

console.log('Concat')
const nomes1 = ['Pedro','Adriel','Renato','João']
const nomes2 = ['Gustavo','Jojo']
const s4 = nomes.concat(nomes2)
console.log(s4)

console.log('Lista?')
const medias = [10,9,8,7.5,10]
let lista = [s4,medias]
console.log(lista)
console.log(lista[0][0],'\n')

console.log('Localizar Nome')
const exibeNota = (nome) => {
    if (lista[0].includes(nome)){
        indice = lista[0].indexOf(nome)
        return lista[0][indice] + ', sua nota é ' + lista[1][indice] + '\n'
    } else{
        return 'Não cadastrado'
    }
}
console.log(exibeNota("Jojo"))

console.log('For')
for (let i = 0; i < s4.length; i++){
    console.log(i,s4[i])
}

