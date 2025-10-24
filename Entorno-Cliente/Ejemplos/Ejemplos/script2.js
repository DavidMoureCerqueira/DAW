// let productos = [
//     { nombre: "Camisa", precio: 20, stock: 5 },
//     { nombre: "Pantalón", precio: 30, stock: 0 },
//     { nombre: "Zapatos", precio: 50, stock: 10 },
//     { nombre: "Sombrero", precio: 15, stock: 3 }
// ];

// //Filtra los productos que están en stock (stock > 0).

// let productosDisponibles = productos.filter((producto) => producto.stock > 0);
// for (const producto of productosDisponibles) {

//     console.log(producto);
// }

// //Crea un array con solo los nombres de los productos disponibles.

// let nombres = productosDisponibles.map((producto) => producto.nombre)
// console.log(nombres)

// // Calcula el valor total del inventario (precio * stock) usando .reduce().

// let resultado = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0)
// console.log(resultado)

// // Ordena los productos por precio de mayor a menor.

// productos.sort((a, b) => a.precio - b.precio)

// for (const producto of productos) {
//     console.log(producto)
// }

// let alumnos = [
//     { nombre: "Luis", calificaciones: [7, 8, 9] },
//     { nombre: "Ana", calificaciones: [10, 9, 10] },
//     { nombre: "Marta", calificaciones: [6, 5, 7] }
// ];

// // Crea un nuevo array con el promedio de cada alumno.

// let promedio = alumnos.map((alumno) => {
//     let promedioDentro = 0
//     for (const calificacion of alumno.calificaciones) {
//         promedioDentro += calificacion;
//     }
//     promedioDentro /= alumno.calificaciones.length
//     return promedioDentro
// }
// )
// console.log(promedio)

// // Filtra solo los alumnos con promedio mayor o igual a 8.
// function promedioIndividual(alumno) {
//     let promedio = 0
//     for (const calificacion of alumno.calificaciones) {
//         promedio += calificacion;
//     }
//     promedio /= alumno.calificaciones.length
//     return promedio

// }
// let alumnosNotables = alumnos.filter((alumno) => promedioIndividual(alumno) >= 8)

// for (const alumno of alumnosNotables) {
//     console.log(JSON.stringify(alumno, null, 2), 'promedio :', promedioIndividual(alumno).toFixed(2))
// }

// // Imprime un mensaje para cada alumno aprobado: "Ana aprobó con promedio 9.66" (redondea a 2 decimales).

// alumnos.forEach(alumno => {
//     let promedio = 0;
//     if ((promedio = promedioIndividual(alumno)) >= 5) {
//         console.log(`${alumno.nombre} aprobó con media de ${promedio}`)
//     }
// });

// let numeros = [12, 7, 5, 20, 15, 7, 12];

// // Ordena los números de mayor a menor.

// numeros.sort((a, b) => a - b)

// console.log(numeros)

// // Elimina los números duplicados.

// let numerosSet = [...new Set(numeros)]
// console.log(numerosSet)

// let numerosFilter = numeros.filter((numero, index, numeros) => numeros.indexOf(numero) == index)
// console.log(numerosFilter)

// // Filtra los números que son múltiplos de 5.

// let numeroMultiplo = numeros.filter((numero) => numero % 5 === 0);
// console.log(numeroMultiplo);


// // Calcula la suma total de esos números usando .reduce().

// let resultado=numeros.reduce((total,numero)=>total+numero,0);
// console.log(resultado);

// let grupo1 = ["Ana", "Luis", "Pedro"];
// let grupo2 = ["Marta", "Pedro", "Luis", "Sofia"];

// // Crea un solo array con todos los nombres sin duplicados.

// let grupoTotal = [...grupo1, ...grupo2]
// grupoTotal = [...new Set(grupoTotal)]
// // grupoTotal = grupoTotal.filter((nombre, index, array) => array.indexOf(nombre) == index);
// console.log(grupoTotal)
// let paco = 'paco'

// // Ordena los nombres alfabéticamente.
// grupoTotal.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
// console.log(grupoTotal)

// // Crea un string con todos los nombres separados por comas.
// let todos = grupoTotal.join(', ')
// console.log(todos)