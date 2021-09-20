// function minhaFuncao1(flag: boolean) {

//     let valor = null;
//     if(flag) return null;
//     return true;
// }

// let x = minhaFuncao1(false);

// function minhaFuncao2(flag: boolean): boolean {

//     let valor = null;

//     // erro aqui! 
//     // Type 'null' is not assignable to type 'boolean'.

//     if(flag) return null;
//     return true;
// }

// let y = minhaFuncao2(false);

// // deixarmos explícitos que a função pode retornar boolean ou null
// function minhaFuncao3(flag: boolean): boolean | null | string{

//     let valor = null;
//     if(flag) return 'null';
//     return true;
// }

// let z = minhaFuncao3(false);

// // 
// enum Tipo {

//     ESPECIAL,
//     PADRAO
// }

// // let tipo: Tipo = Tipo.ESPECIAL;
// let tipo: Tipo = 4;

Em TypeScript também podemos criar decoradores de classes. Um decorador de classe nos dá acesso ao constructor da classe que estamos decorando. Vejamos um exemplo:
export function meuDecoratorDeClasse() {

    return function(constructor: any) {

       // guarda o constructor original, pois iremos definir um novo
        const original = constructor;

       // cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novo: any = function (...args: any[]) {
            console.log("Criando uma instância com New: " + original.name); 
            // cria a instância da classe quando for chamado 
            return new original(...args);
        }

       // importante! O prototype do novo constructor deve ser o mesmo do original
        novo.prototype = original.prototype;

        // retorna o novo constructor
        return novo;
    }
}