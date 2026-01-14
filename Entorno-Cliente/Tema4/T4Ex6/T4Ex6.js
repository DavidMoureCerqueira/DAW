function crearContador() {
    let conta = 0
    return () => {
        conta++
        console.log("Valor Actual:", conta)
    }
}


const contador1 = crearContador()
contador1()
contador1()

const contador2 = crearContador() // Devuelve la función, por lo que conta=0 se ejecuta solo la primera vez
contador2()
contador1()

const saudoGalego = crearSaudo("Boas");
const saudoInformal = crearSaudo("Que tal")

function crearSaudo(texto) {
    return (nombre) => {
        console.log(texto + ", " + nombre + "!")
    }
}

saudoGalego("Juaquin")
saudoInformal("Juaquin")