/******************************************************************************
 * Objetivo: Manipular entrada e saída de dados com interação do usuário
 * Data: 31/07/2024
 * Autor: Giovanna
 * Versão 1.0
*******************************************************************************/

//Import da biblicoteca que permite a interação de entrada de dados
    //pelo usuário no TERMINAL  
    var readline = require('readline')

    //Cria um objeto de interface de digitação para entrada de dados pelo usuário no TERMINAL
    var entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }) 
    
    //Através do objeto entradaDeDados estamos utilizando o metodo question para escrever uma
    // mensagem para o usuário, e através da função de CALLBACK do metodo question conseguimos
    // obter o valor digitado pelo usuário
    entradaDeDados.question ('Digite seu nome: ', function(nome){
        var nomeUsuario = nome
        //console.log ('O nome do usuário é: ' + nome)
    
        entradaDeDados.question('Digite seu email: ', function(email){
            var emailUsuario = email
            //console.log('O email do usuário ' + nome + ' é ' + email)
            //console.log(`O email do usuário ${nome} é ${email}`)
    
            entradaDeDados.question('Digite o nome do curso: ', function(curso){
                var cursoUsuario = curso
                console.log(`O curso do usuario ${nome} é ${curso} e o email do mesmo é ${email}`)
    
                //fechar o objeto de entrada de dados no terminal
                entradaDeDados.close()
            })
        })
    
    })