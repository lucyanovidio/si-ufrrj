// CALCULAR FATORIAL DE UM NÚMERO INTEIRO

function calcFactorial(number) {
    let factorial = number;

    for (let i=number-1; i>=1; i--) {
        factorial *= i;
    }

    console.log(factorial);
}

calcFactorial(10);