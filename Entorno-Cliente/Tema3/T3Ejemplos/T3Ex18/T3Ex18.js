function facerTarefa(nombre) {
    return new Promise((resolve, reject) => {
        let resultado = Math.round(Math.random());
        if (resultado) {
            resolve(`Operacion correcta en, ${nombre}`)
        } else {
            reject(`Error en la tarea ${nombre}`)
        }
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