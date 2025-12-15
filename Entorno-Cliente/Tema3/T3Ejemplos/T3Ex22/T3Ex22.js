//Funcion auxiliar: simula una tarea asincrona
function tarea(nome, tempo) {
    return new Promise((resolve, reject) => {
        console.log('Nombre:', nome, 'Tiempo:',tempo)
        setTimeout(() => {
            const exito = Math.random() > 0.1;
            if (exito) {
                resolve(`${nome} rematou en ${tempo} segundos`)
            } else {
                reject(`Error en la tarea: ${nome}`)
            }
        }, tempo * 1000);
    });
}

// Uso de async/await CON promise.all
async function executarTarefasEnParalelo() {
    try {
        console.log("Iniciando tareas....")

        const [resultado1, resultado2, resultado3] = await Promise.all([
            tarea("Tarefa 1", Math.floor(Math.random() * 6) + 3),
            tarea("Tarefa 2", Math.floor(Math.random() * 6) + 3),
            tarea("Tarefa 3", Math.floor(Math.random() * 6) + 3),
        ])
        console.log("Resultados");
        console.log(resultado1)
        console.log(resultado2)
        console.log(resultado3)

    } catch (error) {
        console.error(error)
    }
}

executarTarefasEnParalelo()