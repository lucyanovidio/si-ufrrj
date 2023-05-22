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
 * se n for numero de fibbonacci ele tem q ir para o que for, a frente, o mais próximo, pra começar a sequência no intervalo
 */

// 4) Crie uma função que recebe um valor como parâmetro e verifique se aquele valor recebido é um número perfeito.

function isAPerfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) { // Encontrando os divisores e somando.
            sum += i;
        }
    }

    // Caso a soma dos divisores seja igual ao número, ele é perfeito, com exceção do zero que não conta como perfeito.

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

function areAnagrams(string_1, string_2) {
    // Caso as strings tenham tamanhos diferentes, já são desconsideradas como anagramas.
    if (string_1.length !== string_2.length) {
        console.log("Não formam anagramas.");
        return;
    }
    
    // Tiramos os espaços para o caso do usuário digitar uma frase, e colocamos em letras minúsculas considerando o case sensitive. Ordenamos as letras com o método "sort" para conferirmos se formam anagramas, já que estes são palavras com as mesmas letras, mas em ordens diferentes.
    function organize(string) {
        return string
            .replace(" ", "")
            .toLowerCase()
            .split("")
            .sort()
            .join("")
    }

    // Caso, após a ordenação, sejam a mesma palavra, formam então anagramas.
    if (organize(string_1) === organize(string_2)) {
        console.log("Formam anagramas.");
    } else {
        console.log("Não formam anagramas.");
    }
}

// 7) Crie uma função que recebe uma string e retorna o resultado informando se ela forma um anagrama.

// 8) Crie uma função que recebe quatro valores e os retorna ordenados do menor para o maior em uma lista.

function organize(num_1, num_2, num_3, num_4) {
    return [num_1, num_2, num_3, num_4].sort(); // buga pra números maiores @
}

// 9) Faça uma função que, ao click de um botão, chama todas as outras das questões 1 a 8, passando os parâmetros e imprimindo os resultados de acordo com cada questão.

function callFunctions() {
    evenOrOdd();
    checkIfItsEvenOrOdd(3);
    isAPerfectNumber(28);
    writePerfectNumbers(1000);
    areAnagrams("AMOR", "roma");
    organize(4,3,2,1);
    guessRandomNum();
}

// 10) Faça uma função que calcula um inteiro aleatório entre 1 e 5. Em seguida, essa função deve pedir para o usuário digitar um valor. Se o valor informado pelo usuário for igual ao valor aleatório, a função para. Caso contrário, ela pede um novo chute do usuário e repete até que ele acerte. Use o console para as interações com o usuário.

function guessRandomNum() {
    let userGuessing;
    let randomNum = Math.floor(Math.random() * 5) + 1;

    while (userGuessing != randomNum) {
        userGuessing = prompt("Chute um número: ");

        if (userGuessing == randomNum) {
            alert("Acertou! O número era " + randomNum);
        } else {
            alert("Chutou errado! Tente de novo.");
        }
    }
}