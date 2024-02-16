let confirmar = 'n'
while (confirmar != 's') {
    let nome = prompt('Digite seu nome')
    let idade = Number(prompt('Digite sua idade'))
    let salario = parseInt(prompt('Digite seu salário'))
    console.log(`Olá ${nome}, voce tem ${idade} anos e seu salario atual é R$${salario}`);
    confirmar = prompt('Deseja confirmar? (s/n)')

    let aumento = 0.015
    console.log('Previsão salarial para os próximos 10 anos:');
    
    
    for (let ano = 1; ano <= 10; ano++){
        salario += salario * aumento
        aumento *= 2
    
        console.log((2023 + ano) + ' = R$ ' + salario);
    }

}

