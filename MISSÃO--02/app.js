/************************************************************************************
 * Objetivo: Desenvolva uma aplicação que possa realizar cálculos matemáticos, para
 * uma empresa.
 * Data: 17/08/2024
 * Autor: Giovanna
 * Versão 1.0
*************************************************************************************/

//import da biblioteca para entrada de dados
var readline = require('readline')

//cria o objeto de entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

entradaDeDados.question ('Digite o primeiro número de entrada: ', function(num1){
    let valor1 = Number (num1)
    
    entradaDeDados.question ('Digite o segundo número de entrada: ', function(num2){
        let valor2 = Number (num2)
        let subtracao 
        let adicao
        let multplicacao
        let divisao
     
        entradaDeDados.question (`(-) Subtração | (+) Adição | (*) Multiplicação | (/) Divisão  | -->  Digite qual operação irá utilizar: `, function(op){
            let operacao = (op)

            if(valor1 == '' || valor2 == ''){
                console.log ('ERRO: --> Insira algum valores númericos, não deixar vazio')
            }else{
                if (isNaN(valor1) == true || isNaN(valor2) == true){
                    console.log ('ERRO: --> Insira valores númericos, não letras')
                }else{
                    if(operacao !== '-' && operacao !== '+' && operacao !== '*' && operacao !== '/'){
                        console.log ('ERRO: Digite apenas os sinais, conforme sua necessidade')
                    }else{
                        if (operacao == '-'){
                            subtracao = (valor1) - (valor2)
                            resultado = subtracao.toFixed(2)
                            console.log (`O Resultado da subtração é ${resultado}`)
                        }else{
                            if(operacao == '+'){
                                adicao = (valor1) + (valor2)
                                resultado = adicao.toFixed(2)
                                console.log (`O Resultado da adição é ${resultado}`)
                            }else{
                                if(operacao == '*'){
                                    multplicacao = (valor1) * (valor2)
                                    resultado = multplicacao.toFixed(2)
                                    console.log (`O Resultado da multiplicação é ${resultado}`)
                                }else{
                                    if(operacao == '/'){
                                        if(valor1 == 0 || valor2 == 0){
                                            console.log('Não se divide por 0, digite outro número')
                                        }else{
                                            divisao = (valor1) / (valor2)
                                            resultado = divisao.toFixed(2)
                
                                            console.log (`O Resultado da divisão é ${resultado}`)
                                        }               
                                    }
                                }
                            }
                        }
                    }
                }
            }    
        })                    
    })      
})