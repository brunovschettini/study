
// Pra saber como funciona
// namespace Views {

    import { View } from './View';

export class MensagemView extends View<string> {

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }

}

// }