let edades = [40, 17, 85, 40, 3, 24]
let letras = ["beta", "gamma", "alpha", "delta", "epsilon", "gamma", "omega", "delfin"]
//some()
let resultadoSome = letras.some(function (busca) { return busca.includes("m") }) //La funcion podria estar creada o crearla ahora
console.log(resultadoSome)

// //every
let resultadoEvery = letras.every(function (busca) { return busca.length > 4 }) //Todas tienen que dar true si no da false
console.log(resultadoEvery)

// //find()
let resultadoFind = letras.find(function (busca) { return busca.startsWith("d") }) //Devuelve el primer elemento que cumple la condicion
console.log(resultadoFind)

//filter()
let resultadoFilter = letras.filter(function (busca) { return busca.length % 2 == 0 }) //Filtra por una condicion
console.log(resultadoFilter)

//filter() para borrar elemento
let resultadoFilterEliminar = letras.filter(function (busca) { return busca != "epsilon" }) //Filtra por una condicion y crea un nuevo array sin ese que no coincide
//es una manera de eliminar, crear otro array filtrando por la condicion que excluye los que tu quieres

console.log(resultadoFilterEliminar)

//map()
// let resultadoMap = letras.map(busca => {busca + '('+busca.length+')'})
let resultadoMap = letras.map(function (busca) { return busca + '(' + busca.length + ')' })
console.log(resultadoMap)

//forEach()
let edadesSuma = 0
edades.forEach(edad => {
    edadesSuma += edad

});
console.log(edadesSuma)

let numLetras = 0
letras.forEach(function (busca) { return numLetras += busca.length })
console.log(numLetras)

//reduce()
let idades = [40, 17, 40, 85, 24];
let resultado = idades.reduce(sumaIdades); // 206
function sumaIdades(total, idade) { return total + idade; }

let resultadoReduce = letras.reduce(function (totalLetras, busca) { return totalLetras += busca.length }, 0) //El 0 lo asocia a la inciializacion de totalLetras

console.log(resultadoReduce)

let resultadoReduceEjercicio = letras.reduce(function (inicio, busca) { return inicio += '->' + busca }, 'Inicio')
console.log(resultadoReduceEjercicio)

let resultadoReduceEjercicioRight = letras.reduceRight(function (fin, busca) { return fin += '<-' + busca }, 'Fin')
console.log(resultadoReduceEjercicioRight)



let productos = [
    { nombre: 'Leche', stock: 10, precio: 1.50 },
    { nombre: 'Pan', stock: 0, precio: 0.9 },
    { nombre: 'Huevos', stock: 25, precio: 2.20 },
    { nombre: 'Queso', stock: 5, precio: 3.45 }
]
let resultadoProductos = productos.filter((producto) =>  producto.stock != 0 )
//let resultadoProductos = productos.filter(function (producto) { return producto.stock != 0 })
resultadoProductos.forEach(objeto => {
    console.log(objeto)
});


