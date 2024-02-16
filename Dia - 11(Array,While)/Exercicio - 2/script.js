let modelos = ['prisma', 'celta', 'porsche']
let anos = ['2020', '2015' ,'2022']
let valores = ['70000', '50000', '300000']
// let contador = 0

// let continuar = true

// while(continuar === true){
//     let modelo = prompt('Qual modelo do carro?')
//     modelos[contador] = modelo

//     let ano = parseInt(prompt('Qual ano do carro?'))
//     anos[contador] = ano

//     let valor = parseInt(prompt('Qual o valor do carro?'))
//     valores[contador] = valor

//     let outroCarro = prompt('Deseja inserir outro carro?(s/n)')

//     contador++
    
//     if(outroCarro === 'n'){
//         continuar = false
//     }
// }

// console.log('Carros cadastrados: ');

// for(let i = 0; i < modelos.length; i++){
//     console.log(`${modelos[i]} - ${anos[i]} - ${valores[i]}`);
// }

//ORDENAR POR PREÇO 
for ( let i = 0; i < valores.length -1; i++){
    for(let j = 0; j< valores.length -i -1;j++){
        if(valores[j] > valores[j+ 1]){

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j+1]
            modelos[j+1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j+1]
            anos[j+1] = anoMaiorValor

            let MaiorValor = valores[j]
            valores[j] = valores[j+1]
            valores[j+1] = MaiorValor
        }
    }
}

console.log('Carros ordenados pelo preço:');
for (let i = 0; i<valores.length; i++){
    console.log(`${modelos[i]} - ${anos[i]} - ${valores[i]}`);
}