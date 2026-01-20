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

// const obtenerDatos = (nombre, tiempo) => {
//     return new Promise((resolve, reject) => {
//         console.log("Inicializando " + nombre + " con tiempo de: " + tiempo)
//         setTimeout(() => {
//             const datos = "La promesa se ha solucionado correctamente"
//             resolve(datos)
//         }, tiempo)
//     })
// }
// obtenerDatos("Tarea 1", 2000)
//     .then((mensaje) => {
//         console.log(mensaje)
//         return "hola"
//     })
//     .then((mensaje) => {
//         // obtenerDatos("Tarea 2", 1000).then((mensaje) => console.log(mensaje))
//         console.log("Recibido de la solucion anterior: " + mensaje)
//     })
//     .catch((error) => error)

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

// const promesa = (nombre) => {
//     return new Promise((resolve, reject) => {
//         console.log(`Iniciando promesa ${nombre}`)
//         const tiempo = Math.floor(Math.random() * 7)
//         console.log("Tiempo de: " + tiempo)
//         setTimeout(() => {
//             if (tiempo === 4) {
//                 reject(`La promesa: ${nombre} ha fallado`)
//             }
//             resolve(`La promesa: ${nombre} se ha resulto en: ${tiempo} segundos`)
//         }, tiempo * 1000)

//     })
// }
// promesa("Tarea 1")
//     .then((datos) => {
//         console.log("Paso 1: ", datos)
//         return promesa("Tarea 2")
//     }).then((datos) => {
//         console.log("Paso 2:", datos)
//         return promesa("Tarea 3")
//     }).then((datos) => {
//         console.log("Paso 3:", datos)
//     }).catch((error) => {
//         console.error(error)
//     })



// async function ejecutarPromesa() {
//     try {
//         let resultado1 = await promesa("Tarea 1")
//         console.log(resultado1)
//         let resultado2 = await promesa("Tarea 2")
//         console.log(resultado2)
//         let resultado3 = await promesa("Tarea 3")
//         console.log(resultado3)

//     } catch (e) {
//         console.error("Error:" + e)
//     }
// }
// ejecutarPromesa()

// const promesa1=promesa("Tarea 1")
// const promesa2=promesa("Tarea 2")
// const promesa3=promesa("Tarea 3")
// const promesas=[promesa1,promesa2,promesa3]
// Promise.all(promesas)
// .then((resultados)=>{
//     console.log("Todas las promesas fueron completadas:")
//     resultados.forEach(resultado => {
//         console.log(resultado)

//     });
// })
// .catch((error)=>{
//     console.error("Error: ", error)
// })

let url1 = 'https://jsonplaceholder.typicode.com/posts/1';
let url2 = 'https://jsonplaceholder.typicode.com/posts/2';
let url3 = 'https://jsonplaceholder.typicode.com/posts/3';

// function leerJSON(url) {
//     return fetch(url)
//         .then((result) => {
//             return result.json()

//         }).catch(error => {
//             console.error("Hubo un error en la peticion: ", error)
//             throw(error)
//         })

// }
async function leerJSON(url) {
    try {

        const response = await fetch(url)
        if (!response.ok) throw new Error("Error en la solicitud")
        return await response.json()
    } catch (error) {
        console.error("Hubo un error en la peticion: ", error)
        throw (error)
    }

}

// Promise.all([leerJSON(url1), leerJSON(url2), leerJSON(url3)])
//     .then(([datos1, datos2, datos3]) => {
//         console.log("Primer dato: ", datos1)
//         console.log("Segundo dato: ", datos2)
//         console.log("Tercer dato: ", datos3)
//     })
//     .catch((error) => {
//         console.log("Error! Alguna petición falló ", error)
//     })


const promesa = (nombre) => {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando promesa ${nombre}`)
        const tiempo = Math.floor(Math.random() * 7)
        console.log("Tiempo de: " + tiempo)
        setTimeout(() => {
            if (tiempo === 4) {
                reject(`La promesa: ${nombre} ha fallado`)
            }
            resolve(`La promesa: ${nombre} se ha resulto en: ${tiempo} segundos`)
        }, tiempo * 1000)

    })
}

// const promesa1 = promesa("Tarea 1")
// const promesa2 = promesa("Tarea 2")
// const promesa3 = promesa("Tarea 3")
// const promesas = [promesa1, promesa2, promesa3]

// Promise.race(promesas)
//     .then((resultado) => {
//         console.log("La primera promesa resuelta fue:", resultado)
//     })
//     .catch((error) => {
//         console.log("La primera proemsa fallida fue:", error)
//     })

//     let promesaRapida=new Promise((resolve)=>setTimeout(()=>resolve("Rapida.."),1000))
//     let promesaLenta=new Promise((resolve)=>setTimeout(()=>resolve("Lenta.."),5000))
// Promise.race([promesaLenta,promesaRapida])
// .then((resultado)=>{
//     console.log("La promesa que ha terminado antes ha sido: ",resultado)
// })
// .catch((error)=>{
//     console.log("La promesa que ha fallado priemro ha sido: ", error)
// })

// Ejercicio realizar tareas y con metodos de promesas saber cual podra hacerse y cual no

function obtenerDatos(tiempoEspera) {

    return new Promise((resolve) => {
        console.log("Tiempo de espera del resolve es de:", tiempoEspera, "segundos")
        setTimeout(() => {
            resolve(`Promesa realizada en: ${tiempoEspera} segundos`)
        }, tiempoEspera * 1000)
    })
}

function limitarTiempo(promesa, tiempoLimite) {
    let timeout = new Promise((_, reject) => {
        console.log("Tiempo limite del reject es de:", tiempoLimite, "segundos")

        setTimeout(() => {
            reject("La promesa tardó demasido")
        }, tiempoLimite * 1000)
    })
    return Promise.race([promesa, timeout])
}

function calcularTiempo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function ejectutarTareas() {
    console.log("Iniciando tareas...")

    try {
        const resultado1 = await limitarTiempo(obtenerDatos(calcularTiempo(2, 4)), calcularTiempo(5, 6))
        console.log("Paso 1:", resultado1)
        const resultado2 = await limitarTiempo(obtenerDatos(calcularTiempo(7, 7)), calcularTiempo(5, 6))
        console.log("Paso 2:", resultado2)
        const resultado3 = await limitarTiempo(obtenerDatos(calcularTiempo(2, 4)), calcularTiempo(5, 6))
        console.log("Paso 3:", resultado2)

    } catch (error) {
        console.log("Error:", error)
    }
}

ejectutarTareas()
console.log("Continuacion de codigo")