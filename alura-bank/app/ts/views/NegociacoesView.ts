
// ECS2015, usava se esse namespace
// Pra saber como funciona
// namespace Views {
    
// Poderia tambem criar um apelido para importar o namespace, exemplo
// import View = Views.View;
// export class MensagemView extends View<string> {

import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            
            ${model.toArray().map(negociacao => 
                `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                `).join('')}  

            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }
}

// }