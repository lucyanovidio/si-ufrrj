// VERIFICAR SE UM CPF É VÁLIDO

const cpf = prompt("Digite seu cpf: ");

function validateCPF(cpf) {
    if (cpf.length != 11) {
        alert("O CPF precisa ter 11 dígitos!");
        return;
    }
    if (isNaN(Number(cpf))) {
        alert("Digite apenas números!");
        return;
    }
    if (cpf == "" ||
    cpf == "00000000000" || // porque número iguais também rola no calculo, mas é invalido, então tem q fazer assim
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999") {
        alert("CPF inválido!");
        return;
    }

    let firstResult = 0, 
    secondResult = 0,
    x = 10;

    for (let i = 0; i < cpf.length - 2; i++) {
        firstResult += (cpf[i] * x);
        x--;
    }

    const isFirstDigitValid = (firstResult * 10) % 11 == cpf[cpf.length - 2];
    
    if (isFirstDigitValid) {
        let b = 11;

        for (let i = 0; i < cpf.length - 1; i++) {
            secondResult += (cpf[i] * b);
            b--;
        }
        const isSecondDigitValid = (secondResult * 10) % 11 == cpf[cpf.length - 1];

        if (isSecondDigitValid) {
            alert("CPF válido!");
        } else {
            alert("CPF inválido!");
        }
    } else {
        alert("CPF inválido!");
    }
}

validateCPF(cpf);