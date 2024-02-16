let array = []
let arrayInvertido = []

for(let  i = 0; i < 5; i++){
    let numeroInserido = parseInt(prompt('Digite elemento ' + (i+1) + ' : '))
    array[i] = numeroInserido
}
console.log('array original : ' + array);
let contador = 4
for (let i = 0; i < 5; i++) {
    
    arrayInvertido[i] = array[contador]
    contador-- 
   
}
console.log('array invertido : ' + arrayInvertido );

