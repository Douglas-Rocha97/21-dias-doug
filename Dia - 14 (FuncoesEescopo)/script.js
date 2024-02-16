function aumentoUsuario() {
    let nome = prompt('Digite se nome')
    let salario = parseInt(prompt('Digite seu salário'))
   

    function calcular(nome, salario) {
        var aumento = 0

        if (salario <= 1500) {
            aumento = 0.2;
        } else if (salario > 1500 && salario <= 2000) {
          aumento = 0.15;
        } else if (salario > 2000 && salario <= 3000) {
            aumento = 0.10
        } else {
            aumento = 0.05
        }

        var novoSalario = salario + (salario*aumento)

        console.log(`nome : ${nome} -
                salário Inicial : ${salario} -
                aumento : ${aumento*100}% -
                salario reajustado : ${novoSalario}`)

        function calcularNovamente() {
            let calcNov = prompt('Deseja calcular novamente com novas informações?(s/n)')
            if (calcNov === 's') {
                aumentoUsuario()
            } else {
                console.log('Programa encerrado');
            }
        }
        calcularNovamente()


    }

    calcular(nome, salario);
}
aumentoUsuario()


