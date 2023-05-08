// MULTIPLICAR DUAS MATRIZES 3x3

let matrix_1 = [1,2,3,4,5,6,7,8,9];
let matrix_2 = [9,8,7,6,5,4,3,2,1];

function calcMatrix(a, b) {
    let c = new Array(9);

    c[0] = a[0]*b[0] + a[1]*b[3] + a[2]*b[6];
    c[1] = a[0]*b[1] + a[1]*b[4] + a[2]*b[7];
    c[2] = a[0]*b[2] + a[1]*b[5] + a[2]*b[8];

    c[3] = a[3]*b[0] + a[4]*b[3] + a[5]*b[6];
    c[4] = a[3]*b[1] + a[4]*b[4] + a[5]*b[7];
    c[5] = a[3]*b[2] + a[4]*b[5] + a[5]*b[8];

    c[6] = a[6]*b[0] + a[7]*b[3] + a[8]*b[6];
    c[7] = a[6]*b[1] + a[7]*b[4] + a[8]*b[7];
    c[8] = a[6]*b[2] + a[7]*b[5] + a[8]*b[8];

    console.log(c);
}

calcMatrix(matrix_1, matrix_2);