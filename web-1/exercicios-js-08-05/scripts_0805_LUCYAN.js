// EXERCÍCIOS DE AULA

// 1) Crie uma função para verificar se um número é par ou ímpar. Imprima o resultado no console ou use um alert.

evenOrOdd();

function evenOrOdd() {
    let myNumber = 3;

    if (myNumber % 2 === 0) {
        console.log("O número " + myNumber + " da primeira função é par.");
    } else {
        console.log("O número " + myNumber + " da primeira função é ímpar.");
    }
}

// 2) Crie uma função para verificar se um número passado por parâmetro é par ou ímpar. Imprima o resultado no console.

function checkIfItsEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("É par.");
    } else {
        console.log("É ímpar.");
    }
}

// 3) Crie uma função que recebe dois parâmetros numéricos inteiros e imprima no console os valores da série de Fibonacci naquele intervalo.

/**
 * se n for numero de fibbonacci ele tem q ir para o que for, mais próximo, pra começar a sequência no intervalo
 */

// 4) Crie uma função que recebe um valor como parâmetro e verifique se aquele valor recebido é um número perfeito.

function isAPerfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) { // Encontrando os divisores e somando
            sum += i; // como deixar mais semântico e inteligível? @
        }
    }

    /**
     * Caso a soma dos divisores seja igual ao número, ele é perfeito, 
     * com exceção do zero que não conta como perfeito
     */

    if (number === sum && number !== 0) { 
        return true;
    } else {
        return false;
    }
}

// 5) Crie uma função que recebe um valor como parâmetro e imprime os números perfeitos entre zero e o valor recebido. Use a função da questão 4.

function writePerfectNumbers(maxNum) { // se eu tento com 100000 ele buga...
    let perfectNumbers = [];

    for (let i = 0; i <= maxNum; i++) {
        if (isAPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    console.log(`Números perfeitos de 0 até ${maxNum}: ${perfectNumbers}`);
}

// 6) Crie uma função que recebe duas strings. Verifique se elas formam um anagrama.

// ...