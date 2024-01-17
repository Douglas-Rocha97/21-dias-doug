let name = prompt("Olá, Qual seu nome?")
let age =Number(prompt( name + ", Qual sua idade?")) 
let licenseCheck = prompt(name + ", Voce tem carteira de motorista? (sim/nao)")
let carCheck = prompt(name + ", Voce tem carro?")

let licenseOwner = false
let carOwner = false

if(licenseCheck == "sim"){
    licenseOwner = true
}

if(carCheck == "sim"){
    carOwner = true
}

if(age < 18 || !licenseOwner){
    console.log(name + ", Voce não pode dirigir");
}else if(age >= 18 && licenseOwner && !carOwner){
    console.log(name + ", voce pode dirigir mas não tem um carro");
}else{
    console.log(name + ", voce será o motorista");
}