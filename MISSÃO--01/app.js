/******************************************************************************
 * Objetivo: Manipular entrada e saída de dados com interação do usuário da
 * empresa viva moda
 * Data: 31/07/2024
 * Autor: Giovanna
 * Versão 1.0
*******************************************************************************/


//Cria um objeto de interface de digitação para entrada de dados pelo usuário no TERMINAL
var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

entradaDeDados.question ('Insira o capital inicial: ', function(p_inicial){
    var capitalinicial = parseFloat (p_inicial)

    entradaDeDados.question ('Insira a taxa de juros anual para calcularmos o percentual: ', function(r_juros){
        var jurosanual = parseFloat (r_juros)

        entradaDeDados.question ('Insira o número de vezes que os juros são compostos por ano: ', function(n_compostos){
            var juroscompostos = parseFloat (n_compostos)

            entradaDeDados.question ('Insira quanto tempo em anos: ', function(t_anos){
                var tempoanos = parseFloat (t_anos)

                var porcentagem = (jurosanual) / 100

                var resultado_1 = (porcentagem) / (juroscompostos) + (1)
                var resultado_2 = (juroscompostos) * (tempoanos)
                var resultado_3 = (resultado_1) ** (resultado_2)
                var resultado_4 = (capitalinicial) * (resultado_3)
                
                console.log('Resultado do juros compostos é: ' + resultado_4)
            
                        entradaDeDados.close()
            })
        })
    })
})