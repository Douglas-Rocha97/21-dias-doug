let nomes = []
let notas = []
let somaDasNotas = 0
let contador = 0
let continuar = true

while (continuar === true) {
    let nome = prompt('Digite o nome do aluno:')
    let nota = parseInt(prompt('Digite a nota do aluno: '))
    somaDasNotas += nota

    nomes[contador] = nome
    notas[contador] = nota
    contador++

    let maisAlunos = prompt('Deseja adicionar mais alunos? (s/n)')
    if(maisAlunos === 'n'){
        continuar = false
    }else{
        continuar = true
    }
}

console.log('Notas dos alunos: ');
for( let i=0; i<nomes.length; i++){
    console.log(nomes[i] + ' - ' + notas[i]);
}
let media = somaDasNotas/contador
console.log('a soma das notas dos alunos foi : ' + somaDasNotas);
console.log('a media ds notas do alunos foi: ' + media);

/*Outra forma de calcular a soma das notas
    for(let i=0; i<nomes.length; i++){
        somaDasNotas += notas[i]
    }

*/
