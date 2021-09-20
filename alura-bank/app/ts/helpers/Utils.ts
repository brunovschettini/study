import { Imprimivel } from "../models/index";

export function imprime(...objects: Imprimivel[]) {
    objects.forEach(o => o.toText());
}