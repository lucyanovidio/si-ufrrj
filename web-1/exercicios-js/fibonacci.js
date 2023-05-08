// CALCULAR A SEQUENCIA DE FIBONACCI DADO UM VALOR MÁXIMO

function createFibonacciSeq(max) {
    let fibonacciSeq = [1];

    while (fibonacciSeq[fibonacciSeq.length - 1] < max) {
        fibonacciSeq.push(fibonacciSeq[fibonacciSeq.length - 2] + fibonacciSeq[fibonacciSeq.length - 1]);

        if (fibonacciSeq.length - 1 === 0 || fibonacciSeq.length - 1 === 1) {
            fibonacciSeq[fibonacciSeq.length - 1] = 1;
        }
    }
    
    fibonacciSeq = fibonacciSeq.slice(0, fibonacciSeq.length - 1);
    console.log(fibonacciSeq);
}

createFibonacciSeq(50);