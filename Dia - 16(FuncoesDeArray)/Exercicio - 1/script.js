let nomes = []
let senhas = []


function perguntarOpcao() {
    let opcao = prompt('O que deseja? 1-Cadastrar; 2-Fazer login; 3-Excluir cadastro; 4-Encerrar')
    return opcao
}

function cadastro() {
    nomes.push(prompt('Digite um nome para cadastro:'))
    senhas.push(prompt('Digite uma senha para cadastro'))
}

function login(nome, senha) {
    let indice = nome.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha) {
        return true
    } else {
        return false
    }
}

function excluir(nome) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log('Cadastro excluído com sucesso');
    } else {
        console.log('Usuário não encontrado');
    }
}

let continuar = true

while (continuar) {
    let opcao = perguntarOpcao()

    switch (opcao) {
        case '1':
            cadastro()
            break;
        
        case '2':
            let nome = prompt('Digite seu nome:')
            let senha = prompt('Digite sua senha')
            let fazerLogin = login(nome,senha)

            if (fazerLogin) {
                console.log('Login realizado com sucesso');
            }else{
                console.log('Nome ou senha incorretos!');
            }
            break;

        case '3':
            let name = prompt('Digite seu nome:')
            excluir(name)
            break;

        case '4':
            continuar = false
            break;

        default:
            console.log('Opção inválida. Tente novamente');
            break;
    }
}