/************************************************************************************
 * Objetivo: Exercicio para calculo de médias escola, com a utilização de tratamento
 * de dados e conversão de dados com estruturas condicionais
 * Data: 07/08/2024 / 17/08/2024
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

//entrada do nome do aluno
    entradaDeDados.question('Digite o nome do aluno: ', function(nome){
        //variavel local que recebe o argumento da função
        let nomeAluno = (nome)

        //entrada do nome do curso
        entradaDeDados.question('Digite o nome do curso: ', function(curso){
            let nomeCurso = curso

            //entrada da 1 nota do aluno
            entradaDeDados.question('Digite a primeira nota do aluno: ', function(valor1){
                let nota1 = parseFloat (valor1)
                
                //entrada da 2 nota do aluno
                entradaDeDados.question('Digite a segunda nota do aluno: ', function(valor2){
                    let nota2 = parseFloat (valor2)

                    //entrada da 3 nota do aluno
                    entradaDeDados.question('Digite a terceira nota do aluno: ', function(valor3){
                        let nota3 = parseFloat (valor3)

                        //entrada da 4 nota do aluno
                        entradaDeDados.question('Digite a quarta nota do aluno: ', function(valor4){
                            let nota4 = parseFloat (valor4)
                            let resultado
                            let situacao 
                        
                            /*Operadores de comparação

                                == Igualdade entre dois conteudos
                                != diferença entre dois conteudos
                                <= valor menor ou igual
                                >= valor maior ou igual
                                < valor menor
                                > valor maior
                                === verifica a igualdade entre dois conteudos e verificar os tipos de dados
                                ==! verifica conteudos iguais e tipos de dados diferentes
                                !== verifica conteudos diferentes e conteudos iguais
                                !=! verifica conteudos diferentes e tipos de dados diferentes

                            */
                            
                            /*
                                Operadores lógicos

                                E     &&    AND
                                OU    ||    OR    
                                NÃO   !    NOT

                            */

                            //tratamento para entrada de dados vazios   
                            if(nomeAluno == '' || nomeCurso == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                console.log ('ERRO: É obrigatório o preenchimento de todas as entradas de dados.')
                            }else{
                                //tratamento para validar se o conteudo das variaveis possuem alguma letra ou se são numericas
                                //isNaN() -> função para verificar a ocorrência de caracters não númericos
                                if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                                    console.log('ERRO: É obrigatório a entrada de valores numericos nas notas.')
        
                                    }else{
                                        //tratamento de entrada de valores apenas entre 0 e 10
                                        if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                            console.log('ERRO: É obrigatório a entrada de valores entre 0 e 10.')
                                        }else {
                                            resultado = ((nota1) + (nota2) + (nota3) + (nota4)) /4
                                            //console.log (resultado)
                                        }
                            }   

                                //do prof:
                                // if(resultado >= 7 && resultado <=10){
                                //   situacao = 'APROVADO'
                                //}else{
                                //if (resultado >=5 && resultado < 7){
                                //   situacao = 'RECUPERAÇÃO'
                                //}else{
                                //   situação = 'REPROVADO'
                                //}
                                //}
                                //

                                }if (resultado == 7 || resultado >7 ){
                                    situacao = 'APROVADO'
                                }if(resultado == 5 || resultado == 6.9){
                                    situacao = 'RECUPERAÇÃO'
                                }if (resultado < 4.9){
                                    situacao = 'REPROVADO'
                                }
                                console.log (`
BOLETIM DO ALUNO

* CURSO: ${nomeCurso}
* NOME DO ALUNO: ${nomeAluno}
* NOTAS: ${nota1}, ${nota2}, ${nota3}, ${nota4}
* MEDIA FINAL: ${resultado.toFixed(1)}
* SITUAÇÃO: ${situacao}
                                    `)
                                
                            entradaDeDados.close()
                        })
                    })
                })
            })
        })
    })
