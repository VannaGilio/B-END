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

const percorrerArray = function(){
    let nomesDeAlunos = ['Eduarda de Jesus', 
                        'Felipe Vieira',
                        'Luiz Henrique',
                        'Gabriel Guedes',
                        'Sofia Souza',
                        'Giovanna Gilio',
                        'Beatriz Coelho',
                        'Renato Augusto',
                        'Eduardo Nascimento',
                    ]

    let contador = 0
    // noemesDeAlunos.length -> retorna quantos elementos temos no array 
    console.log('EXEMPLO DO WHILE')
    while(contador < nomesDeAlunos.length){
        console.log (nomesDeAlunos[contador])
        contador += 1
    }
    
    console.log(`EXEMPLO DO FOR`)
    for(let contador = 0; contador < nomesDeAlunos.length; contador ++){
        console.log (nomesDeAlunos[contador])
    }

    console.log ('EXEMPLO forEach')
    nomesDeAlunos.forEach(function(item){
        console.log (item)
    })
}

const filtrarProduto = function(nomeProduto){
    let produto = String(nomeProduto).toUpperCase()
    let status = false
    let listaDeProdutos = []
    listaDeProdutos.push('Teclado',
                        'Mouse',
                        'Caixa de Som',
                        'Impressora',
                        'Monitor',
                        'Gabinete',
                        'Memória',
                        'HD',
                        'SSD',
                        'Placa de Video',
                        'Placa Mãe'
                        )

    // Maneira tras com que ao pesquisar a palavra precisa ser totalmente igual, pensando em um front-end
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase() == produto){
            status = true
        }
    })

    // Maneira tras com que ao pesquisar a palavra pode aparecer varios itens, por exemplo placas, pensando em um front-end
    //includes() -> Permite verificar se existe um conteudo dentro do array(retorna true ou false)
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().includes(produto)){
            status = true
        }
    })
    
    //indexOf() -> Permite verificar se existe um conteudo dentro do array (retorn 0 OU -1)
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().indexOf(produto) == 0){
        status = true
        }
    })
    return status
}

console.log(filtrarProduto('placa'))
//percorrerArray()
//comandosBasicos()