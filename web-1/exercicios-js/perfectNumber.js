// CALCULAR TODOS OS NÚMEROS PERFEITOS EM UM INTERVALO (VLOR DE INÍCIO E FIM)

console.log(findPerfectNumbers(0, 10000));

function findPerfectNumbers(start, end) {
    let perfectNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isPerfect(i) && i != 0) { // verificando se é perfeito e se não é zero, já que não é considerado perfeito
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}

function isPerfect(number) {
    let dividersSum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) { // encontrando divisores e somando
            dividersSum += i;
        }
    }

    return dividersSum === number; // retornando true ou false sobre ser perfeito
}