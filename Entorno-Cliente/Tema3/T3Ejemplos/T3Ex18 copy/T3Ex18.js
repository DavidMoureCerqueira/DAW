function facerTarefa(nombre) {
    return new Promise((resolve, reject) => {
        // Entre 0 y 7

        // Hacer un setTimeOut en lugar de la condicion y se multiplica el tiempo de espera de 10000*el resultado del random
        let resultado = Math.round(Math.random() * 8);
        console.log(resultado)
        setTimeout(() => {
            if (resultado < 7 && resultado >= 1) {
                resolve(`Operacion correcta el valor del resultado es: ${resultado}, en ${nombre}`)
            } else if (resultado == 0 || resultado == 7) {
                reject(`Error el resultado ha sido 0 o 7,  en ${nombre}`)
            }
        }, 1000 * resultado)

    })
}









facerTarefa("Tarefa 1")
    .then((resultado1) => {
        console.log(resultado1);
        return facerTarefa("Tarefa 2");
    })
    .then((resultado2) => {
        console.log(resultado2);
        return facerTarefa("Tarefa 3")
    })
    .then((resultado3) => {
        console.log(resultado3);
    })
    .catch((error) => {
        console.log(error)
    })