/************************************************************************************
 * Objetivo: Desenvolva uma aplicação que possa realizar cálculos matemáticos, para
 * uma empresa, utilizando funções locais ou em arquivos externos.
 * Data: 28/08/2024
 * Autor: Giovanna
 * Versão 1.0
*************************************************************************************/

//Import da biclioteca de calculos que for criada pelo programador
var calculos = require('./modulo/calculos.js')
//import da biblioteca para entrada de dados
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 


entradaDeDados.question('Digite o primeiro valor: ', function(valor1){
    let numero1 = String(valor1).replace(',','.') //conversão da variavel para string e replace para trocar "," por "."

    entradaDeDados.question('Digite o segundo valor: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')

        entradaDeDados.question('Escolha uma operação matemática: [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(operacao){
            let tipoCalculo = operacao
            let resultado

            //Validação de dados vazia
            if (numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERRO: É obrigatório a entrada de todos os valores e operção')
            //Validação de dados numéricos
            }else if (isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: É obrigatório somente a entrada de dados numéricos.')
            }else{
                
                //chamando function do outro arquivo
                resultado = calculos.calculadora(numero1, numero2, tipoCalculo)


                //Tratamento para verificar se a variavel resultado foi utilizada nos calculos
                if (resultado){
                    console.log(resultado)
                }
            }
            entradaDeDados.close()
        })
    })
})