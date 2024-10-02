/*****************************************************************
 * Objetivo: Trabalhar com ARRAY e JSON
 * Data: 25/09/2024
 * Autor: Giovanna Coelho
 * Versão: 1.0
 *****************************************************************/

/**
 * [] --> ARRAY (É uma lista de dados)
 * {} --> JSON (É uma forma de organizar dados) Atributo: Valor -> não existe indice, não existe REPETIÇÃOO
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

const conceitoJSON = function(){

    //Criando array e colocando dois objetos dentro do mesmo
    let listaDeClientes = []

    //PRIMEIRA FORMA de criar um objeto do tipo JSON
    let cliente = {nome: 'Eduarda de Jesus', telefone: '11916577992', email: 'dudinha@gmail.com'}

    //Exibe todos os atributos do objeto JSON *****
    console.log(cliente)
    console.table(cliente)

    //Exibir só um atributo JSON *****
    console.log(cliente.nome)

    //SEGUNDA FORMA de criar um objeto do tipo JSON
    let cliente2 = {}
    cliente2.nome = 'Felipe Viera'
    cliente2.telefone = '1195246781'
    cliente2.email = 'felipinho@gmail.com'
    
    //exibir o JSON cliente2 *****
    console.log(cliente2)

    //Adiciona no array os objetos do JSON *****
    listaDeClientes.push(cliente, cliente2)

    //Exibe os dados de array referente a um indice, e trazendo pelo atributo do JSON
    console.log(listaDeClientes[1].nome)

    //Percorre o array de clientes e retorna somente o nome dos clientes
    listaDeClientes.forEach(function(item){
        console.log(item.email)
    })
}

const cadastroDeProdutos = function(){

//ARRAY CADASTRO DE MARCAS | ENTIDADES (BD)
    let marcas = []
    marcas.push(
                {nome: 'Dell', telefone: '(11)95249-7092', email: 'dell@gmail.com'},
                {nome: 'Microsoft', telefone: '(11)95247-9856', email: 'microsoft@gmail.com'},
                {nome: 'LG', telefone: '(11)95247-7092', email: 'lg@lg.com.br'},
                {nome: 'Asus', telefone: '(11)95647-2232', email: 'asus@asus.com.br'}
            )

//ARRAY CADASTRO DE CATEGORIAS | ENTIDADES (BD)
    let categorias = []
    categorias.push(
                {nome: 'Hardware'},
                {nome: 'Periféricos'},
                {nome: 'Smart Home'},
                {nome: 'Games'},
                {nome: 'Computadores'},
                {nome: 'Escritório'}
            )

//ARRAY CADASTRO DAS CORES | ENTIDADES (BD)
    let cores = []
    cores.push(
                {nome: 'Preto', hexadecimal: '#00000'},
                {nome: 'Branco', hexadecimal: '#ffffff'},
                {nome: 'Cinza', hexadecimal: '#999896'},
                {nome: 'Azul', hexadecimal: '#083fa6'},
    )
    
    let produtos = []
    produtos.push(
                {
                    nome: 'Mouse', 
                    descricao: 'Mouse Óptico, 7700 DPI, com fio', 
                    preco: '80.50', 
                    quantidade: 50, 
                    marca: marcas[0],
                    categoria: categorias[
                        categorias[1],
                        categorias[5]
                    ],
                    cor: cores
                }
    )
}

//console.log(filtrarProduto('placa'))
//percorrerArray()
//comandosBasicos()
// conceitoJSON()
cadastroDeProdutos()