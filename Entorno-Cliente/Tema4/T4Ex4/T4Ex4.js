function calcularEstadisticas(numeros) {

    function calcularMedia() {
        let paco = []

        let sumatorio = 0
        for (const numero of numeros) {
            sumatorio += numero

        }
        console.log(sumatorio)
        return sumatorio / numeros.length

    }
    console.log('Media: ', calcularMedia())

    function calcularMaximo() {
        let maximo = numeros[0]
        for (const numero of numeros) {
            if (numero > maximo) {
                maximo = numero;
            }
        }
        return maximo
    }
    console.log("El numero máximo es: " + calcularMaximo())
}

calcularEstadisticas([1, 3, 5, 6, 7]);