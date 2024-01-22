let numberOne = parseInt(prompt('insira um numero'))
let numberTwo = parseInt(prompt('insira mais um numero'))
let option = parseInt(prompt("escolha a operação que deseja realizar:"
    + "\n1 = +; \n2 = -; \n3 = *; \n4 = / "))

switch (option) {
    case 1:
        console.log(numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo));
        break;
    case 2:
        console.log(numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo));
        break;
    case 3:
        console.log(numberOne + " * " + numberTwo + " = " + (numberOne * numberTwo));
        break;
    default:
        console.log(numberOne + " / " + numberTwo + " = " + (numberOne/numberTwo));
        break;
}

/*let idade = Number(prompt("Insira sua idade"))

switch(idade){
    case 10:
        console.log('voce tem 10 anos');
        break
    case 15 :
        console.log('voce tem 15 anos');
        break
    default:
        console.log('default');
        break
    }
    */