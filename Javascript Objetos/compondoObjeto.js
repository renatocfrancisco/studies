const cliente = {
    nome:"Renato",
    idade: 23,
    cpf: "33635896896",
    email: "renatocfrancisco1999@gmail.com",
    fones: ["5519999999999", "5519123456789"]
}

cliente.familiares = {
    nome: "Rafael",
    parentesco:"Irmão",
    dataNasc: "14/04/2004"
}

console.log(cliente);

cliente.familiares.nome = "Lúcia"
cliente.familiares.parentesco = "Irma"

console.log(cliente);