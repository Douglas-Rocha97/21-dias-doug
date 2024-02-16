//CRIANDO CLASSES
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdDoHotel
    NomeDoResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idDoHotel, nomeDoResponsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdDoHotel = idDoHotel
        this.NomeDoResponsavel = nomeDoResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

//CRIANDO ARRAYS
let hoteis = []
let reservas = []
let idDoHotel = 1
let idDaReserva = 1

//FUNCOES
function cadastrarHotel() {
    let nome = prompt('Digite o nome do hotel')
    let categoria = prompt('Digite a categoria do hotel')
    let endereco = prompt('Digite o endereço do hotel')
    let telefone = prompt('Digite o telefone do hotel')

    let hotel = new Hotel(idDoHotel, nome, categoria, endereco, telefone)
    hoteis.push(hotel)
    idDoHotel++
}


function cadastrarReserva() {
    let existe = false

    do {
        // let idDoHotel = parseInt(prompt('Digite o ID do hotel:'))
        // for(let i = 0; i < hoteis.length; i ++){
        //     if(hoteis[i].Id == idDoHotel){
        //         console.log('reserva feita');
        //         existe = true
        //     }else if(hoteis[i].Id !== idDoHotel){
        //         console.log('Esse hotel não foi cadastrado');
        //     }
        // }
        idDoHotel = parseInt(prompt('Digite o ID do hotel:'))
        for (let i = 0; i < hoteis.length; i++) {
            if (hoteis[i].Id == idDoHotel) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log('Esse hotel não foi cadastrado');
            }
        }
    } while (!existe);

    let nomeResponsavel = prompt('Digite o nome do responsável pela reserva:')
    let diaEntrada = parseInt(prompt('Digite o dia de entrada:'))
    let diaSaida
    do {
        diaSaida = parseInt(prompt('Digite o dia de saída: '))
        if (diaSaida < diaEntrada) {
            console.log('O dia de saída deve ser maior que o dia de entrada');
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reserva(idDaReserva, idDoHotel, nomeResponsavel, diaEntrada, diaSaida,)
    reservas.push(reserva)
    idDaReserva++
}


function procurarReservasPeloHotel(idHotel) {
    for (let i = 0; i < reservas.length; i++) {
        if (idHotel == reservas[i].IdDoHotel) {
            console.log('nome do hotel - ' + hoteis[i].Nome);
            console.log('nome do responsável da reserva - ' + reservas[i].NomeDoResponsavel);
            console.log('Dia de entrada - ' + reservas[i].DiaEntrada);
            console.log('Dia da saída - ' + reservas[i].DiaSaida);
        }
    }
}

function procurarHotelPelaReserva(idReserva) {
    for (let i = 0; i < reservas.length; i++) {
        if (idReserva == reservas[i].Id) {
            console.log('Nome do hotel - ' + hoteis[i].Nome);
            console.log('Endereço - ' + hoteis[i].Endereco);
            console.log('Dia de entrada - ' + reservas[i].DiaEntrada);
            console.log('Dia da saída - ' + reservas[i].DiaSaida);
        }
    }
}

function procurarReservaPeloNome(nome) {
    reservas.forEach(reserva => {
        if (reserva.NomeDoResponsavel == nome) {
            console.log(reserva);
        }
    })
}

function procurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].Categoria == categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function atualizarHotel(idHotel, tel) {
    hoteis.forEach(hotel => {
        if (idHotel == hotel.Id) {
            hotel.Telefone = tel
        } else {
            console.log('esse hotel não foi cadastrado');
        }
    })
}

let continuar = true
do {
    let opcao = prompt('Escolha uma opção: n1- Cadastrar hotel \n2- cadastrar reserva' +
        '/n3 - Procurar reserva pelo hotel  /n4- Procurar hotel pela reserva' +
        '/n5 - Procurar reserva pelo responsável /n6 - Procurar hotéis por categoria' +
        '/n7 - Atualizar telefone de um hotel /n8 - Encerrar programa')

    switch (opcao) {
        case '1':
            cadastrarHotel()
            break;
        case '2':
        cadastrarReserva()
            break;
        case '3':
            procurarReservasPeloHotel(parseInt(prompt('Digite o ID do hotel:')))
            break;
        case '4':
        procurarHotelPelaReserva(parseInt(prompt('Digite o ID da reserva :')))
            break;
        case '5':
        procurarReservaPeloNome(prompt('Digite o nome do responsável pela reserva:'))
            break;
        case '6':
        procurarHotelPelaCategoria(prompt('Digite a categoria que deseja procurar: '))
        console.log(hoteisProcurados);
            break;
        case '7':
            let idHotel = parseInt(prompt('Digite o ID do hotel:'))
            let tel = prompt('Digite o novo numero :')
            atualizarHotel(idHotel,tel)
            break;

        case '8':
            console.log('Programa encerrado');
            continuar = false
        default:
            console.log('Opção Inválida');
            break;
    }
} while (continuar);


