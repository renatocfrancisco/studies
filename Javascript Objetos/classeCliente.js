class Cliente{
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

const renato = new Cliente("Renato", "renato@gmail.com", "123456789", 300)

renato.exibirSaldo()
renato.depositar(100)
console.log(renato);