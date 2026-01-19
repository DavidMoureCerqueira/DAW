// let promesa = new Promise((resolve, reject) => {
//     let resultado = 1 + Math.floor(Math.random() * 6)
//     console.log("El numero que ha resultado es: " + resultado)
//     if (resultado <= 3) {
//         resolve("Operacion correcta")
//     } else {
//         reject("Operación incorrecta")
//     }
// })
// promesa
//     .then((respuesta) => console.log(respuesta))
//     .catch((respuesta) => console.log(respuesta))

const obtenerDatos = (nombre, tiempo) => {
    return new Promise((resolve, reject) => {
        console.log("Inicializando " + nombre + " con tiempo de: " + tiempo)
        setTimeout(() => {
            const datos = "La promesa se ha solucionado correctamente"
            resolve(datos)
        }, tiempo)
    })
}
obtenerDatos("Tarea 1", 2000)
    .then((mensaje) => {
        console.log(mensaje)
        return "hola"
    })
    .then((mensaje) => {
        // obtenerDatos("Tarea 2", 1000).then((mensaje) => console.log(mensaje))
        console.log("Recibido de la solucion anterior: " + mensaje)
    })
    .catch((error) => error)

// obtenerDatos()
// .then((datos) => {
// console.log("Paso 1:", datos);
// return "Máis algún dato";
// })
// .then((maisDatos) => {
// console.log("Paso 2:", maisDatos);
// })
// .catch((erro) => {
// console.error("Erro:", erro);
// });