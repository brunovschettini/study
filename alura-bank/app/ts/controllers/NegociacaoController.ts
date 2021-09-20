import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes, INegociacao } from '../models/index';
import { domInject, logarTempoDeExecucao, throttle } from '../helpers/decorators/index';
import { data } from 'jquery';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

export class NegociacaoController {

    // private _inputData: Element; // Pega o InnerHTML
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    // private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();

    constructor() {
        // Substituido pelo Decorator, lazyLoad
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');

        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);

        let temCarteira: boolean;
        temCarteira = true;
        // temCarteira = undefined;

        // Importante ver isso
        // const elCartao: HTMLDivElement = <HTMLDivElement> document.querySelector('#cartao_1');
        // let elPaiDoPai;
        // if(elCartao.parentElement) {
        //     elPaiDoPai = elCartao.parentElement.parentElement;
        // }
        // console.log(elPaiDoPai);
    }

    // Tem que sempre criar as declaracao do tipo
    adiciona(event: Event) {

        // Subistituido por @logarTempoDeExecucao()
        // const t1 = performance.now();

        event.preventDefault();

        let newDate = new Date(this._inputData.val().replace(/-/g, ','));

        console.log(newDate.getDay());


        // if(data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo) {
        //     this._mensagemView.update('Somente negociações em dias úteis, por favor.');
        //     return;
        // }

        if(!this._ehDiaUtil(newDate)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor.');
            return;
        }

        const negociacao = new Negociacao(
            // Edge
            // new Date(this._inputData.value.replace(/-/g, '/')),
            // Chrome
            newDate, 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso');

        // console.log(negociacao.quantidade);
        
        // apaga o array, porem se no controler no metodo toArray for concatenado e tipado nada sera apagado
        // this._negociacoes.toArray().length = 0; // acabou de apagar!

        // não tem dado para iterar!
        // this._negociacoes.toArray().forEach(negociacao => {
        //     console.log(negociacao.data);
        //     console.log(negociacao.quantidade);
        //     console.log(negociacao.valor);
        // });

        // const t2 = performance.now();
        // console.log(`Tempo de execução do método adiciona(): ${(t2 - t1)/1000} segundos`);
    }

    private _ehDiaUtil(__data: Date): boolean {
        return __data.getDay() != DiaDaSemana.Sabado && __data.getDay() != DiaDaSemana.Domingo;
    }
    
    @throttle()
    async importaDados() {        
        
        // function isOk(res: Response) {
        //     if(res.ok) {
        //         return res;
        //     } else {
        //         throw new Error(res.statusText);
        //     }
        // }

        // const isOk: HandlerFunction = (res: Response) => {
        //     if(res.ok) {
        //         return res;
        //     } else {
        //         throw new Error(res.statusText);
        //     }
        // }

        // this._negociacoes.paraTexto();

        // this._negociacaoService
        //     .obterNegociacoes(res => {
        //         if(res.ok) return res;
        //         throw new Error(res.statusText);
        //     })
        //     .then(negociacoesParaImportar => {
        //         const negociacoesJaImportadas = this._negociacoes.toArray();
        //         negociacoesParaImportar
        //         .filter(negociacao => 
        //             !negociacoesJaImportadas.some(jaImportada => 
        //                 negociacao.ehIgual(jaImportada)))
        //         .forEach(negociacao => 
        //             this._negociacoes.adiciona(negociacao));
        //         this._negociacoesView.update(this._negociacoes);
        //     }).catch(err => {
        //         this._mensagemView.update(err.message);
        //     });

        try {
            const negociacoesParaImportar = await this._negociacaoService
            .obterNegociacoes(res => {
                if(res.ok) return res;
                throw new Error(res.statusText);
            });
            
            const negociacoesJaImportadas = this._negociacoes.toArray();
    
            negociacoesParaImportar
            .filter(negociacao => 
                !negociacoesJaImportadas.some(jaImportada => 
                    negociacao.ehIgual(jaImportada)))
            .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));
    
                this._negociacoesView.update(this._negociacoes);
        } catch(err) {
            this._mensagemView.update(err.message);
        }
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}