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
        },
        {
            nome: "Celso",
            parentesco:"Pai",
            dataNasc: "07/05/1960"
        }
    ],
    saldo: 100,

    depostiar:function(valor){
        this.saldo += valor
    }
}

function ofereceSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("familiares")){
        console.log(`${obj.nome}`);
    }
}

ofereceSeguro(cliente)

console.log(Object.values(cliente));
console.log(Object.entries(cliente));