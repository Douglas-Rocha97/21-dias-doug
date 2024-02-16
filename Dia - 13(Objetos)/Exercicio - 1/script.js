class Computador {
    tipo /*desktop - notebook */
    processador/*nome do seu processador */
    video/*integrado ou dedicado */
    armazanamento/*numero em gb de memoria */
    memoriaRam/*numero em gb de memoria */
    SSD  /*true or false */
    
    constructor(tipo,processador,video,armazanamento,memoriaRam,SSD){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazanamento = armazanamento
        this.memoriaRam = memoriaRam
        this.SSD = SSD
    }

    mostrar(){
        console.log(`Computador tipo : ${this.tipo};
        processador : ${this.processador}
        video : ${this.video}
        armazenamento : ${this.armazanamento}
        memória ram : ${this.memoriaRam}
        ssd : ${this.SSD}`);
    }
}

let computador = new Computador('Desktop','Core I9','dedicado','1TB','16GB','True')
computador.mostrar()