let num = parseInt(prompt('Digite um numero inteiro positivo'))

for(let i = num; i <= num + 2; i++){
    console.log('Tabuada do numero ' + i + ' :')
    for(let j = 1; j <= 10; j++ ){
        console.log(i + ' X ' + j + ' = ' + (i*j));
    }
}