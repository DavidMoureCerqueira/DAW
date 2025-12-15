
function obterDatos(tempoEspera) {
    return new Promise((resolve) => {
        console.log(`Tiempo de espera del resolve es de: ${tempoEspera}`)
        setTimeout(() => {
            resolve(`Tarea completada en  ${tempoEspera} segundos.`)
        }, tempoEspera * 1000)
    });
}


function limitarTiempo(promesa, limiteSegundos) {
    let timeout = new Promise((_, reject) => {
        console.log(`Tiempo de espera del reject es de: ${limiteSegundos}`)
        setTimeout(() => {
            reject(`La tarea superó el tiempo de ${limiteSegundos}`)
        }, limiteSegundos * 1000)
    });
    return Promise.race([promesa, timeout]) //Es una promesa como resultado de dos promesas
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function executarTarefa() {
    try {
        console.log("Iniciando tarea...")

        const resultado1 = await limitarTiempo(obterDatos(numeroAleatorio(1, 4)), numeroAleatorio(0, 2));
        console.log("Paso 1:", resultado1)
        const resultado2 = await limitarTiempo(obterDatos(numeroAleatorio(1, 4)), numeroAleatorio(0, 2));
        console.log("Paso 1:", resultado2)
        const resultado3 = await limitarTiempo(obterDatos(numeroAleatorio(1, 4)), numeroAleatorio(0, 2));
        console.log("Paso 1:", resultado3)
        console.log("Todas las tareas acabadas")

    } catch (error) {
        console.error("Error", error)
    }

}
executarTarefa()
console.log("Continuando con otras operaciones mientras las tareas se ejecutan")