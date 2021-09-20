// declare var $: any;
// O recurso acima somente deve ser usado se nao houver bilblioteca disponivel.

import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    /**
     * 
     * @param seletor 
     * @param escapar Utilizado para evitar Inject do JS
     */
    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T): void {
        // const t1 = performance.now();
        let template = this.template(model);
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*<\/script>/, '');
        }
        this._elemento.html(template);
        // const t2 = performance.now();
        // console.log(`Tempo de execução do método update(): ${(t2 - t1)/1000} segundos`);        
    }

    // template(model: T): string {
    //     throw new Error('Você deve implementar o método template');
    // }
    abstract template(model: T): string;    

}