function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const renato = new Cliente("Renato", "33635896896", "renatocfrancisoc1999@gmail.com",300)
console.log(renato);
renato.depositar(100)
console.log(renato);