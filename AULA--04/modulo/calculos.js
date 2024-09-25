/*********************************************************************
 * Objetivo: Arquivo de funções para realizar calculos matemáticos
 * Data: 28/08/2024
 * Autor: Giovanna
 * Versão: 1.0
 * *******************************************************************/

function calculadora(valor1, valor2, operacao){
    // Recebe os dados em variaveis locais, encaminhados pelo argumento da função
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado

    // Processamento para realizar os calculos matemáticos
    // toUpperCase para transformar string em letras minúsculas e tornar um padrão independente do que o usuário digitou
    if(tipoCalculo.toUpperCase() == 'SOMAR'){
        resultado = Number(numero1) + Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
        resultado = Number(numero1) - Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
        resultado = Number(numero1) * Number(numero2)
    }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
        //validação da divisão por 0
        if(numero2 == 0){
            console.log('ERRO: Não é possível realizar a divisão por 0.')
        }else{
            resultado = Number(numero1) / Number(numero2)
        }
    }else{
        console.log('ERRO: A operação digitada não corresponde as opções de calculo')
    }

    if (resultado != undefined){
        return resultado
    }else{
        return false
    }
}

/*OUTRA FORMA DE CONDIÇÃO QUE PODE SE UTILIZAR*************************************************
switch (tipoCalculo.toUpperCase()) {
    case 'SOMAR':
        resultado = Number(numero1) + Number(numero2)
        break;
    case 'SUBTRAIR':
        resultado = Number(numero1) - Number(numero2)
        break
    case 'MULTIPLICAR':
        resultado = Number(numero1) * Number(numero2)
        break
    case 'DIVIDIR':
        // validação da divisão por 0
        if(numero2 == 0){
            console.log('ERRO: Não é possível realizar a divisão por 0.')
        }else{
            resultado = Number(numero1) / Number(numero2)
        }
        break
    default:
        console.log('ERRO: A operação digitada não corresponde as opções de calculo')
        break;
}
/************************************************************************************************/

//exportar funções para acessar de outros lugares/ função publica
module.exports = {
    calculadora
}