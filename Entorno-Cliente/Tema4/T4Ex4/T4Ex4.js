function calcularEstadisticas(numeros) {
// una funcion hija puede acceder a funciones hermanas o padres
// una funcion padre NO PUEDE ACCEDER A PARAMETROS DE UNA FUNCION HIJA

// RECORDAR QUE LET Y CONST ES AMBITO DE BLOQUE, UN IF O ASI, PERO VAR ES DE FUNCION
// SI SUMATORIO FUESE VAR NO SE PODRIA USAR DESDE LA FUNCION PADRE, AL IGUAL QUE LET Y CONST
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