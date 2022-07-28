const cliente = {
    nome:"Renato",
    idade: 23,
    cpf: "33635896896",
    email: "renatocfrancisco1999@gmail.com",
    fones: ["5519999999999", "5519123456789"],
    familiares: [{
        nome: "Rafael",
        parentesco:"Irmão",
        dataNasc: "14/04/2004"
    }]
}

cliente.familiares.push({
    nome: "Celso",
    parentesco: "Pai",
    dataNasc: "07/05/1960"
})

console.log(cliente);

const familiarIrmao = cliente.familiares.filter(familiares => familiares.parentesco === "Irmão")

console.log(familiarIrmao);
// console.log(familiarIrmao[0].nome);