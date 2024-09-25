/**************************************************************************************************
 * Objetivo: Arquivo responsável pela criação de funções e utilização de estruturas de repetição
 * Data: 04/09/2024
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************************************************/

// Metodo tradicional
function gerarSequenciaNumerica (numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false

    if(validarDados(numeroI,numeroF)){
        contador = parseFloat(numeroI)

        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            contador +=1
            // contador = contador + 1
            // contador ++
            // contador +=1
        }
    }
    return status
}

// Função em seta // Arrow function
const gerarNovaSequenciaNumerica = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador ++){
            console.log(contador)
            status = true
        }
    }
    return status
}

//Função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = true 

    // Validação de entrada vazia
    if (numeroI == '' || numeroF == ''){
        console.log('ERRO: Dados obrigatórios na digitação.')
        status = false
    // Validação de entrada de caracteres inválidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: Não é permitido a entrada de letras.')
        status = false
    }
    return status
}

module.exports = {
   gerarSequenciaNumerica,
   gerarNovaSequenciaNumerica
}

// console.log(gerarNovaSequenciaNumerica(8,8))
// console.log (gerarSequenciaNumerica(7,10))
// console.log(validarDados(2,19))
