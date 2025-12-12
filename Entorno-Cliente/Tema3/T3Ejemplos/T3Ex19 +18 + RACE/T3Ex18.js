function facerTarefa(nombre) {
    return new Promise((resolve, reject) => {
        // Entre 0 y 7

        // Hacer un setTimeOut en lugar de la condicion y se multiplica el tiempo de espera de 10000*el resultado del random
        let resultado = Math.round(Math.random() * 7);
        console.log(resultado, `${nombre}`)
        setTimeout(() => {
            resolve(`Operacion correcta el valor del resultado es: ${resultado}, en ${nombre}`)
            // if (resultado < 7 && resultado >= 1) {
            //     resolve(`Operacion correcta el valor del resultado es: ${resultado}, en ${nombre}`)
            // }
            // else if (resultado == 0 || resultado == 7) {
            //     reject(`Error el resultado ha sido 0 o 7,  en ${nombre}`)
            // }
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

console.log("Ejecucion paralela")
Promise.all([
    facerTarefa("Tarea asincrona 1"),
    facerTarefa("Tarea asincrona 2"),
    facerTarefa("Tarea asincrona 3")
])
    .then(([data1, data2, data3]) => {
        console.log("Respuesta1: ", data1);
        console.log("Respuesta2: ", data2);
        console.log("Respuesta3: ", data3);
    })
    .catch(error => {
        console.error('Error (alguna peticion fallo): ', error)
    });


// lAS DEL PROMISE ALL SE LANZAN TODAS SIMULTANEAMENTE, Y SI TODAS ACABAN BIEN ES CUANDO TE DEVUELVEN EL RESULTADO

console.log('EJECUCION EN CARRERA')
Promise.race([

    facerTarefa("Tarefa A"),
    facerTarefa("Tarefa B"),
    facerTarefa("Tarefa C")
])
    .then((resultado) => {
        console.log("GANADORA");
        console.log(resultado);
        console.log("Pero las demas se ejecutaron igualmente")
    })
    .catch((error) => {
        console.log("FALLO CAPTURADO")
        console.error(error)
    })