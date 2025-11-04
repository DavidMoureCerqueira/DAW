//Capturar error



function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("No se puede dividir entre 0");
    }
    return dividendo / divisor
}



try {
    console.log(dividir(10, 2));
    console.log(dividir(5, 0));

} catch (error) {
    console.log(error.name);
    console.log(error.message)

} finally {

}

try {
    let valorNulo = null
    console.log(valorNulo.edad)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Fin del try-catch");
}