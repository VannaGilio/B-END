/*****************************************************************
 * Objetivo: Trabalhar com ARRAY e JSON
 * Data: 25/09/2024
 * Autor: Giovanna Coelho
 * Versão: 1.0
 *****************************************************************/

/**
 * [] --> ARRAY (É uma lista de dados)
 * {} --> JSON (É uma forma de organizar dados)
 **/

const comandosBasicos = function (){
    //Primeira forma de criar uma array
    let listaDeNomes = ['José', 'Maria', 'João', 'André', 12, true]

    //Imprime o objeto array
    console.log(listaDeNomes)

    //Imprime o objeto array em formato de tabela, mostrando os indicies
    console.table(listaDeNomes)

    //Imprime o conteúdo de um indice
    console.log(listaDeNomes[1])

    //Verifica o tipo de dados de um indice
    console.log(typeof(listaDeNomes[4]))
    console.log(typeof(listaDeNomes[5]))

    //Segunda forma de criar um objeto do tipo array
    let listaDeClientes = []
    //Forçar a determinar o conteudo do indice ---> Não é daora legal!!!!!
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[5] = 'Eduarda de Jesus'

    console.table(listaDeClientes)

    //Terceira forma de criar um array
    let listaDeProdutos = []

    //Adicionando elementos no array
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('Gabinete')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Memoria', 'Placa mãe', 'HD')
    console.table(listaDeProdutos)
    
    //Adicionar no inicio da lista
    listaDeProdutos.unshift('Impressora')
    console.table([listaDeProdutos])
    console.table(listaDeProdutos)

    //Permite remover o ultimo objeto/item do arrey
    listaDeProdutos.pop()
    console.table(listaDeProdutos)
    
    //Permite remover o primeiro elemento do array
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //Permite remover um indice qualquer do array
    // splice --> (3,4) apartir do indice 3 remover os próximos 4 itens
    listaDeProdutos.splice(3,1)
    console.table(listaDeProdutos)
    
    //Exibe a quantidade de itens que tem no array
    console.log(listaDeProdutos.lengtah)
}

comandosBasicos()