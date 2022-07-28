const cliente = {
    nome:"Renato",
    idade: 23,
    cpf: "33635896896",
    email: "renatocfrancisco1999@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]]);

chaves.forEach(info=>console.log(cliente[info]))