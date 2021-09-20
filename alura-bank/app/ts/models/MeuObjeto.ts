import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";
import { Negociacao } from "./Negociacao";

export interface MeuObjeto<T> extends Imprimivel, Igualavel<Negociacao> {

}