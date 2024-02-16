let array = []
let arrayInvertido = []
let tamanhoArray = parseInt(prompt('Quantos numero deseja inserir? '))

for (let i = 0; i < tamanhoArray; i++) {
    let elemento = parseInt(prompt(`Digite o elemento ${(i+1)} :`))
    array[i] = elemento
}
console.log('array original: ' + array );

//invertendo array
let contador = tamanhoArray
for (let i = 0; i < tamanhoArray; i++) {
    arrayInvertido[i] = array[contador-1]
    contador--
}
console.log('Array invertido: ' + arrayInvertido);