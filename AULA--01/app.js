/**************************************************************************
 * Objetivo: conhecer os primeiros comandos do Node.JS
 * Data: 31/07/2024
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************************/

// Permite exibir uma mensagem no terminal
console.log('Exercício 01 - Node.JS');

/*

    Criação de variáveis

    var -> permite criar variáveis de escopo global na aplicação
                (metodo tradicional desde a década de 90)
    let -> permite criar uma variável de escopo local
                (onde irá funcionar somente dentro daquele bloco)
    const -> permite criar espaço em memória de conteúdos que não sofrem mudanças durante o projeto

*/

var nome = 'Jose'

// typeof -> permite identificar o tipo de dados de uma variável
    //(string, boolean, number, object)
console.log(typeof(nome))

// Concatenação de conteúdos
console.log('O conteúdo da variável é: ' + nome) 

var valor1 = '10.5'
var valor2 = '20'

/* parseInt() -> converter string para inteiros
        parseFloat() -> converter string para inteiros ou real
        Number -> permite converter uma string para interito ou real (atual)
*/
var resultado = Number (valor1) + Number (valor2)

// Concatenação tradicional
console.log(`O resultado da soma é: ${resultado}`)
// Concatenação reduzida
console.log('O resultado da soma é: ' + resultado)