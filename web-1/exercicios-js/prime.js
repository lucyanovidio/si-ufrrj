// IDENTIFICAR SE O NÚMERO É PRIMO

function isAPrimeNumber(number) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(number);
        }
    }

    if (arr.length === 2) {
        console.log(number + " é um número primo");
    } else {
        console.log(number + " não um número primo");
    }
}

isAPrimeNumber(53);