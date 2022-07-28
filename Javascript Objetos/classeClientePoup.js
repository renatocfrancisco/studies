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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const renato = new ClientePoupanca("Renato", "renato@gmail.com", "123456789", 300, 0)

renato.exibirSaldo()
renato.depositar(100)
renato.depositarPoupanca(100)
console.log(renato);