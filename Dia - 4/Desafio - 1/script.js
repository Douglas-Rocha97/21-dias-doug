let hungryCheck = prompt("Olá, voce esta com fome (sim/nao) ?")
let moneyCheck = prompt("Voce pode pagar um restaurante (sim/nao)?")
let restaurantCheck = prompt("O restaurante esta aberto? (sim/nao)?")

if (hungryCheck === "nao" || moneyCheck === "nao") {
    console.log("Hoje a janta será em casa")
} else if (hungryCheck === "sim" && moneyCheck == "sim" && restaurantCheck === "nao") {
    console.log("Peça um delivery");
} else{
    console.log("Hoje o jantar será no seu restaurante preferido!!");
}
