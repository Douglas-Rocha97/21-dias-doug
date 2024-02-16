class Carro {
    Nome/*mercedes, ferrari etc */
    Potencia/*cavalos de potencia */
    VelocidadeMaxima
    Aceleracao/*segundos de 0 a 100km/h */

    constructor(nome,potencia,velocidadeMaxima,aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    calcular(distanciaMetros){
        let resultado = distanciaMetros/(this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome/*local da corrida */
    Tipo/*F1,Stock Car, Rally */
    Distancia/*total em M da corrida */
    Participantes/*array de objetos da classe de carro */
    Vencedor/*qual equipe ganhou a corrida*/

    constructor(nome,tipo,distancia){
        this.Nome = nome
        this.Distancia = distancia
        this.Tipo = tipo
        this.Participantes = [] 
        this.Vencedor = ''
    }

    verificarVencedor(){
        let menorTempo = this.Participantes[0].calcular(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].calcular(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[i]
            }
        }
        return this.Vencedor = vencedor
    }

    exibirVencedor(){
        console.log("O vencedor é: " + this.Vencedor.Nome);
    }
}

let corrida = new Corrida('Monza', 'F1', 60000)
corrida.Participantes[0]= new Carro('kicks', 120, 160 , 5)
corrida.Participantes[1]= new Carro('marea', 210, 200 , 9)
corrida.Participantes[2]= new Carro('peugeot', 300, 220 , 10)

corrida.verificarVencedor()
corrida.exibirVencedor()