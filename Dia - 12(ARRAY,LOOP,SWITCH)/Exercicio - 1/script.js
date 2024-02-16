let nomes = []
let senhas = []
let contador = 0

let continuar = true


while (continuar) {

    let opcao = prompt('Oque deseja?(1-cadastrar; 2-login; 3-excluir cadastro; 4-encerrar;')
    
    switch (opcao) {
        case '1'/*cadastro*/:
            let nomeCadastro = prompt('Digite seu nome:')
            let senhaCadastro = prompt('Digite uma senha:')
            nomes[contador] = nomeCadastro
            senhas[contador] = senhaCadastro
            contador++

            break;

        case '2'/*login */:
            let nomeUsuario = prompt('Digite seu nome:')
            let senhaUsuario = prompt('Digite sua senha:')
            let loginValido = false

            for (let i = 0; i < nomes.length; i++) {
               if(nomes[i] == nomeUsuario && senhas[i] == senhaUsuario){
                    loginValido = true
               }
            }

            if(loginValido){
                alert('Login feito com sucesso. Bem-vindo!')
            }else {
                alert('Login ou senha incorretos!')
            }
            
            break;

        case '3'/*Excluir */:
           
        let nomeExcluir = prompt('Digite seu nome:')
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (nomes[i] === nomeExcluir) {
                    alert('Cadastro excluído com sucesso')
                }else{
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--
            
            break;

        case '4':
            continuar = false
            break;
        
        default :
        console.log('Opção inválida, escolha outra');
            break;
    }
}
