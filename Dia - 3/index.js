let name = prompt("Olá, Qual seu nome?")
let age = Number(prompt("Qual sua idade," + name + " ?"))
let height = parseFloat(prompt("Qual sua altura em metro, " + name + " ?"))
let weight = Number(prompt("Qual seu peso em Kg, " + name + " ?"))

let birthYear = 2023 - age 
let imc = weight / (height * height)

console.log("Olá " + name + ", voce tem " + age + " anos, nasceu em " + birthYear + ", tem " + height + "m de altura, pesa " + weight + "kg seu IMC é " + imc.toFixed(2) +"Kg/m2")
