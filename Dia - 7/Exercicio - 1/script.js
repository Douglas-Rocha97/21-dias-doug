let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresaAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1


while (contador <= 5) {
    let nota = parseInt(prompt('Qual a nota do ' + contador + 'º aluno?'))
    let sexo = prompt('qual o sexo do aluno(a)? (m/f)')
    contador++
    mediaGeral += nota

    if (sexo == "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == "f" && nota > 7){
        qtdMulheresaAcimaDe7++
    }
    mediaGeral/5
}

console.log('a media geral dos alunos é: ' + mediaGeral);
console.log('a quantidade total de homens é: ' + qtdHomens);
console.log('o numero de mulheres com nota a cima de 7 é: ' + qtdMulheresaAcimaDe7);
console.log('a maior mota entre os homens é: ' + maiorNotaHomens);
