// let frutas = ["manzana", "pera"];
// 👉 Agrega "naranja" al final.
// 👉 Quita el primer elemento.
// 👉 Agrega "plátano" al principio.
// 👉 Muestra el array final.

// frutas.push('naranja');
// console.log(frutas)
// frutas.shift();
// console.log(frutas)
// frutas.unshift('plátano')
// console.log(frutas)

// let numeros = [10, 20, 30, 40, 50];
// // 👉 Muestra el primer y el último elemento.
// // 👉 Cambia el valor del elemento en la posición 2 por 35.

// let primero = numeros[0];
// let final = numeros[numeros.length - 1];
// console.log('Primero:', primero, 'Final:', final);
// //Dos formas de hacerlo:
// numeros[2]=35;
// console.log(numeros);
// //Otra forma de hacerlo:;
// let posicion = 2;
// numeros.splice(2, 1, 35);
// console.log(numeros);

// let colores = ["rojo", "verde", "azul", "amarillo"];
// // 👉 Elimina el elemento con índice 1 usando splice().
// // 👉 Muestra el array resultante.

// let posicionAEliminar = 1;

// colores.splice(posicionAEliminar, 1)

// console.log(colores)

// let letras = ["a", "b", "c", "d", "e"];
// // 👉 Crea un nuevo array con las letras del índice 1 al 3 (sin modificar el original).

// let letrasDividido = letras.slice(1, 3+1);


// console.log("Array", letras);
// console.log("SubArray", letrasDividido);

// let edades = [12, 18, 25, 10, 30, 16];
// // 👉 Crea un nuevo array con las edades mayores o iguales a 18.

// let edadesMayor = edades.filter((edad) => edad >= 18);
// console.log(edadesMayor);

// let nombres = ["Ana", "Luis", "Marta", "Juan"];
// // 👉 Verifica si "Marta" está en el array.
// // 👉 Obtén el primer nombre que empiece con "J".
// //Dos formas de hacerlo
// // Usando includes()
// console.log(nombres.includes('Marta'));
// //Usando some()
// console.log(nombres.some((nombre) => nombre === 'Marta'));

// let resultado = nombres.findIndex((nombre) => nombre[0] === 'J');
// console.log(nombres[resultado], resultado);

// resultado = nombres.find((nombre) => nombre.startsWith('J'));
// console.log(resultado);

// let numeros = [1, 2, 3, 4];
// // 👉 Crea un nuevo array con los cuadrados de cada número.

// let cuadrados=numeros.map((numero)=>numero**2);

// console.log(cuadrados);


// let precios = [10, 20, 30, 40];
// // 👉 Calcula la suma total de todos los precios usando reduce().

// let sumaPrecios = precios.reduce((sumaTotal, precios) => sumaTotal + precios)

// console.log(sumaPrecios)

// let a = [5, 3, 8];
// let b = [2, 9, 1];
// // 👉 Combina ambos arrays.
// // 👉 Ordena el resultado de menor a mayor.

// let c = a.concat(b);
// console.log(c);

// let combinado = [...a, ...b];
// console.log(combinado);

// c.sort((a1, a2) => a1 - a2);
// console.log(c);


// let numeros = [1, 2, 2, 3, 4, 4, 5];
// // 👉 Crea un nuevo array sin elementos repetidos.
// // 💡 Pista: usa filter() e indexOf(), o Set.

// let sinRepetidosFilter = numeros.filter((numeros, index, self) => self.indexOf(numeros) == index);
// console.log(sinRepetidosFilter);

// let sinRepetidosSet = [...new Set(numeros)];
// console.log(sinRepetidosSet);

// let meses = ["enero", "febrero", "marzo", "abril"];
// // 👉 Inserta "mayo" después de "marzo".
// // 👉 Elimina "febrero".;
// let posicionMarzo = meses.indexOf('marzo');
// meses.splice(posicionMarzo + 1, 0, 'mayo');
// console.log(meses);
// let posicionFebrero = meses.indexOf('febrero');
// meses.splice(posicionFebrero, 1);
// console.log(meses)

// let notas = [4, 7, 10, 3, 8];
// // 👉 Quita las notas menores de 5.
// // 👉 Duplica cada nota restante.
// // 👉 Calcula la media de las notas finales.

// notas = notas.filter((nota) => nota >= 5);
// console.log('Filtrado:', notas)
// notas = notas.map((nota) => nota * 2);
// console.log('Duplciado:', notas)
// let resultado = notas.reduce((suma, nota) => (suma + nota))/notas.length
// console.log('Resultado:', resultado.toFixed(2))

//TODO A LA VEZ
// let notas = [4, 7, 10, 3, 8];
// let longitud = new Number()
// let resultado = (
//     notas.filter((nota) => nota >= 5)
//         .map((nota) => nota * 2, longitud = notas.length)
//         .reduce((suma, nota) => suma + nota, 0)
// ) / longitud
// console.log(longitud)
// console.log(resultado)

// let notas = [4, 7, 10, 3, 8];

// let { suma, cont } = notas.reduce((acc, nota) => {
//     if (nota >= 5) {
//         acc.suma += nota * 2;
//         acc.cont += 1
//     }
//     return acc;
// }, { suma: 0, cont: 0 });

// let media = suma / cont;

// console.log(media.toFixed(2))


// ---------------------------------- o ------------------------------------------

// let numeros = [1, 2, 3, 4, 5, 6];
// // 👉 Invierte el array.
// // 👉 Crea un nuevo array con solo los primeros 4 elementos.
// numeros.reverse();
// console.log(numeros);

// let nuevoArr = numeros.filter((_, index) => index < 4);
// console.log(nuevoArr);

// let letras = ["a", "b", "a", "c", "b"];
// // 👉 Crea un array nuevo sin elementos repetidos.
// let sinRepetidos = [...new Set(letras)];

// console.log(sinRepetidos);

// let colores = ["rojo", "verde", "azul"];
// // 👉 Elimina el color "verde" usando splice() o filter().

// //filter()

// let nuevoArr = colores.filter((color) => color != 'verde');
// console.log(nuevoArr);
// //splice()

// colores.splice((colores.indexOf('verde')), 1);
// console.log(colores);

// let edades = [12, 18, 25, 10, 30, 16];
// // 👉 Crea un array con el doble de las edades mayores de 18.

// let dobleMayorEdad = edades
//     .filter((edad) => edad >= 18)
//     .map((edad) => edad * 2)
// console.log(dobleMayorEdad);

// let nombres = ["Ana", "Luis", "Marta", "Juan"];
// // 👉 Reemplaza "Luis" por "Carlos" usando findIndex() y splice().

// if (nombres.includes('Luis')) {

//     let posicion = nombres.findIndex((nombre) => nombre === 'Luis');
//     nombres.splice(posicion, 1, 'Carlos');
//     console.log(nombres);
// }

// let numeros = [2, 4, 6, 8, 10];
// // 👉 Verifica si todos los números son pares.
// // 👉 Verifica si hay algún número mayor que 9.
// console.log(numeros.every((numero) => numero % 2 == 0));
// console.log(numeros.some((numero) => numero > 9));

// let notas = [
//     { nota: 7, peso: 2 },
//     { nota: 10, peso: 3 },
//     { nota: 5, peso: 1 }
// ];
// // 👉 Calcula la media ponderada: (suma de nota*peso) / (suma de pesos)

// let { sumaPorPeso, sumaPeso } = notas.reduce((acc, nota) => {

//     acc.sumaPorPeso += nota.nota * nota.peso;

//     acc.sumaPeso += nota.peso
//     return acc;
// }, { sumaPorPeso: 0, sumaPeso: 0 })

// let promedio = sumaPorPeso / sumaPeso;
// console.log(promedio.toFixed(2));

// let numeros = [1, 2, 3, 4, 5, 6];
// // 👉 Quita los números menores que 3
// // 👉 Multiplica cada número por 3
// // 👉 Calcula la suma final usando reduce()


// //En una operacion
// let suma = numeros.reduce((acc, numero) => {

//     if (numero >= 3) {
//         acc += numero * 3
//     }
//     return acc
// }, 0)

// console.log(suma)

// //Utilizando varios metodos seguidos
// let solucion = numeros
//     .filter((numero) => numero >= 3)
//     .map((numero) => numero * 3)
//     .reduce((acc, numero) => acc + numero, 0)

// console.log(solucion)


// let personas = [
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Luis", edad: 30 },
//     { nombre: "Marta", edad: 25 }
// ];
// // 👉 Crea un objeto que agrupe las personas por edad
// // Resultado esperado: { "25": ["Ana", "Marta"], "30": ["Luis"] }

// let resultado = personas.reduce((acc, persona) => {

//     if (!acc[persona.edad]) {
//         acc[persona.edad] = [];
//     }
//     acc[persona.edad].push(persona.nombre)
//     return acc
// }, {})
// console.log(JSON.stringify(resultado,null, 2))

// let productos = [
//     { nombre: "Camiseta", precio: 20 },
//     { nombre: "Pantalón", precio: 30 },
//     { nombre: "Zapatos", precio: 50 }
// ];
// // 👉 Ordena los productos de mayor a menor precio
// // 👉 Crea un array con solo los nombres de los productos ordenados

// productos.sort((a, b) => b.precio - a.precio);
// console.log(JSON.stringify(productos, null, 2));
// let nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);



// let productos = [
//     { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
//     { nombre: "Pantalón", precio: 35, categoria: "Ropa" },
//     { nombre: "Zapatos", precio: 50, categoria: "Calzado" },
//     { nombre: "Calcetines", precio: 5, categoria: "Ropa" },
//     { nombre: "Botas", precio: 80, categoria: "Calzado" }
// ];

// // 🔹 Tareas:
// // 1. Filtra los productos de la categoría "Ropa".
// // 2. Crea un array con los nombres de esos productos.
// // 3. Calcula el precio total de los productos de "Calzado".
// // 4. Ordena todos los productos por precio de menor a mayor.

// //1.

// let ropas = productos.filter((producto) => producto.categoria == 'Ropa');

// console.log(JSON.stringify(ropas, null, 2))
// let nombresRopa = ropas.map((ropa) => ropa.nombre);
// console.log(nombresRopa)
// let precioCalzado = productos.reduce((acc, producto) => acc + producto.precio, 0)
// console.log(precioCalzado)

// productos.sort((a, b) => a.precio - b.precio)
// console.log(JSON.stringify(productos, null, 2))


let estudiantes = [
    { nombre: "Ana", notas: [7, 8, 9] },
    { nombre: "Luis", notas: [5, 6, 7] },
    { nombre: "Marta", notas: [9, 10, 10] },
    { nombre: "Juan", notas: [3, 4, 5] }
];

// 🔹 Tareas:
// 1. Calcula la nota media de cada estudiante (array de objetos con {nombre, media}).
// 2. Crea un array con los nombres de los estudiantes cuya media sea >= 7.
// 3. Calcula la media general de todos los estudiantes combinando todas las notas.



// ----------FORMA LARGA-------------
// let notaMedEstudiante = estudiantes.map((estudiante) => {
//     let media = ((estudiante.notas).reduce((acc, nota) => acc + nota, 0)) / estudiante.notas.length;
//     return {
//         nombre: estudiante.nombre,
//         media: media
//     }
// })

// console.log(JSON.stringify(notaMedEstudiante, null, 2))

// // let notaMedEstudianteBreve = estudiantes.map((estudiante) => ({ [estudiante.nombre]: estudiante.notas.reduce((acc, nota) => acc + nota, 0) / estudiante.notas.length }))
// // console.log(JSON.stringify(notaMedEstudianteBreve, null, 2))

// let nombresMayor7 = notaMedEstudiante
//     .filter((estudiante) => estudiante.media >= 7)
//     .map((estudiante) => estudiante.nombre)
// console.log(nombresMayor7)


// // 3. Calcula la media general de todos los estudiantes combinando todas las notas.

// let media = estudiantes.reduce((acc, estudiante) => acc + (estudiante.notas.reduce((accN, nota) => accN + nota, 0)) / estudiante.notas.length, 0) / estudiantes.length
// console.log(media)

let hombre = null
console.log(hombre.String())