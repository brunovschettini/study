// import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { Negociacao } from './Negociacao';
// import { Imprimivel } from "./Imprimivel";
// import { Igualavel } from "./Igualavel";
import { MeuObjeto } from './MeuObjeto';

export class Negociacoes implements MeuObjeto<Negociacoes> {

    // private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = [];
    // Validando tipo para teste
    // private _idades: Array<Number> = [1, 2, 3];

    // @logarTempoDeExecucao(true)
    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    // toArray() {
    // return this._negociacoes;
    // @logarTempoDeExecucao()
    toArray(): Negociacao[] {
        // Concat garante que os dados nao sejam apagados.
        // ([] as Negociacao[]).concat... forca utilizacao do tipo
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    toText(): void {
        console.log("Imprimir");
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes);
    }    

}