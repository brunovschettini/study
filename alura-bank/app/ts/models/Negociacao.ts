// import { Imprimivel } from "./Imprimivel";
// import { Igualavel } from "./Igualavel";

import { MeuObjeto } from "./MeuObjeto";

export class Negociacao implements MeuObjeto<Negociacao> {

    // Padrao do mercado
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // Padrao do mercado
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    // Com TypeScrip nao preciso declarar as variaveis no inicio, somente no construtor
    // <input type="date"> nao e suportado pelo Firefox > about:config > dom.forms.datetim e set como true
    // readonly: Contudo, o TypeScript possui um atalho para declaração de propriedades somente leitura. Para isso, basta usarmos o modificador readonly
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    toText(): void {
        console.log("Imprimir");
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }

    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }

}