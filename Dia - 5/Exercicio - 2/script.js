let opcao = prompt(' O que deseja? abastecer com? '
    + ' 1 - gasolina; 2 - alcool; ou 3 - calibrar os pneus')
let valor
let qntd

switch (opcao) {
    case "1":
       valor = parseInt(prompt('Digite o valor desejado para abastecer?'))
        qntd = valor / 5
        console.log('foram abastecidos ' + qntd + 'L de gasolina');
        break;

    case "2":
        valor = parseInt(prompt('Digite o valor desejado para abastecer?'))
        qntd = valor / 3
        console.log('foram abastecidos ' + qntd + 'L de alcool');
        break;

    default:
        console.log('Pneus calibrados com sucesso');
        break;
}