
let saldo = 1000
let maiorValorInserido = 0
let somaDosValoresInseridos = 0
let totalTransacoes = 0
let continuar = false

do {
    let nome =  prompt('Digite seu nome')
    let cpf = prompt('Digite seu cpf')
    let valor = parseInt(prompt('Qual o valor que deseja fazer a operacao?'))
    let operacao = prompt('Qual operacao deseja fazer? (s/d)')

    if(saldo < valor && operacao === 's'){
        console.log('Saldo insuficiente. A transação não foi realizada');
    }else if(valor < 0){
        console.log('Valor inválido. A transação não foi realizada');
    }else if(operacao === 's'){
        
        console.log(`Olá ${nome}, (${cpf}), seu saldo atual é de R$${saldo}`);
        
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }

        saldo -= valor
        totalTransacoes++
        somaDosValoresInseridos += valor

        console.log(`Olá ${nome}, ${cpf} , seu saldo é de R$${saldo}`);
    }else {
        console.log(`Olá ${nome}, (${cpf}, seu saldo atual é de R$${saldo})`);
        
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }

        saldo += valor
        totalTransacoes++
        somaDosValoresInseridos+=valor 

        console.log(`Olá ${nome}, ${cpf} , seu saldo é de R$${saldo}`)
    }

    let opcao = prompt('Deseja continuar? 1 - para continuar; 2 - para parar')
        if( opcao === '1'){
            continuar = true
        }else if(opcao === '2'){
            continuar = false
        } else {
            console.log('Opção inválida, Programa encerrado');
            continuar = false
        }
    
} while (continuar);


console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${somaDosValoresInseridos / totalTransacoes}`);

