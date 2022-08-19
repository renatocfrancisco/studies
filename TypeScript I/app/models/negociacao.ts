export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: Number, 
        public readonly valor: Number
    ) {}

    // get volume(): number {
    //     return this.quantidade * this.valor;
    // }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

}
