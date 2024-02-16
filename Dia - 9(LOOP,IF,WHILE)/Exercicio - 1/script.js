let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Digite sua idade'))
let peso = parseInt(prompt('Digite seu peso em Kg'))
let altura =Number(prompt('Digite sua altura em metros'))
let profissao = prompt('Digite sua profissão')

console.log(`Olá ${nome}, você  tem ${idade} anos, é ${profissao},
 tem ${altura}M de altura e pesa ${peso}kg`);	

 // certificando idade do usuário
if(idade >= 18){
    console.log('Está liberado apara tomar uma geladas');
} else {
    console.log('Sem geladas pra você');
}

// calculo da idade do usuário em meses/semanas/dias
let idadeDias = idade * 365
console.log(`Você tem ${idadeDias} dias de vida`);

let idadeSemanas = idade * 52
console.log(`Você tem ${idadeSemanas} semanas de vida`);

let idadeMeses = idade * 12
console.log(`Você tem ${idadeMeses} meses de vida`);


// calculando IMC

function calcImc(peso,altura) {
   let resultado = (peso / (altura * altura)).toFixed(2)
   return resultado
}
 
let imc = calcImc(peso, altura)
console.log(imc + 'Kg/m2');

if(imc<=18.5){
    console.log('Magreza');
} else if(imc >18.5 && imc <= 24.9){
    console.log('Normal');
} else if(imc > 24.9 && imc <= 30){
    console.log('Sobrepeso');
} else {
    console.log('Obesidade');
}

// Ano de nascimento do usuario
let anoNascimento = 2023 - idade
let idadeAtual = 0
for(let i = anoNascimento; i <= 2023; i++){
    console.log(`${i} - ${idadeAtual} ano(s) de idade`);
    idadeAtual++
}

//usar loop do/while

do {
    let continuar = prompt('deseja continuar (s/n)')
} while (continuar == 's');







