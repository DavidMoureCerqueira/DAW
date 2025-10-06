let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (i in matriz) {
    for (k in matriz[i]) {
        console.log(matriz[i][k])
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}

console.log('forof')
for (f of matriz) {
    for (c of f) {
        console.log(c)
    }
}

//Tabla de multiplicar

for (let i = 1; i <= 9; i++) {
    let fila = "";
    for (let j = 1; j <= 10; j++) {
        fila += i * j + "\t"
    }
    console.log(fila + "\n")
}