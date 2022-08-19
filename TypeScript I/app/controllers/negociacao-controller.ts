import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(){
        const exp = /-/g;
        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(exp, ',')),
            parseInt(this.inputQuantidade.value), 
            parseFloat(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        
        this.limparFormulario();
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}