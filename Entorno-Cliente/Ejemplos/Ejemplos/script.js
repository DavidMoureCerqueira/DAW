// let frutas = ['manzana', 'banana', 'naranja'];

// console.log(frutas[0], frutas[frutas.length - 1]);

// frutas.push('pera');
// console.log(frutas);
// frutas.unshift('fresa');
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i] * 2)

// }
// for (let i in numeros) {
//     console.log(numeros[i]*2);    
// }

// let nombre = ["Ana", "Luis", "Pedro", "Marta"];

// console.log(nombre.includes('Pedro'))
// console.log(nombre.indexOf('Luis'))

// let numeros=[10, 15, 20, 25, 30];
// let mayores20=numeros.filter((numero)=>numero>20);
// console.log(mayores20);
// let multi3=mayores20.map((numero)=>numero*3);
// console.log(multi3);

// let numeros = [3, 1, 4, 2, 5]
// numeros.sort((a, b) => a - b)
// console.log(numeros)
// let numerosReves = numeros.reverse()
// console.log(numeros)

// let arr1 = [1, 2, 3, 4]
// let arr2 = [4, 5, 6]
// let nuevoArr = [...arr1, ...arr2]
// nuevoArr.sort((a,b)=> a-b)
// for (let i = 0; i < nuevoArr.length; i++) {
//     if (i < nuevoArr.length && nuevoArr[i] == nuevoArr[i + 1]) {
//         nuevoArr.splice(nuevoArr[i], 1);
//     }
// }
// console.log(nuevoArr);


// let arr=[5,10,15];
// let resultado=arr.reduce((total,numero)=>total+numero,0);
// console.log(resultado);

let estudiantes = [
    { nombre: "Ana", edad: 20, promedio: 8 },
    { nombre: "Luis", edad: 22, promedio: 9 },
    { nombre: "Marta", edad: 21, promedio: 7 }
];

let estudiantesFiltrados = estudiantes.filter((estudiante) => estudiante.promedio > 8);
for (const estudiante of estudiantesFiltrados) {

    console.log(estudiante);
}

let nombres = estudiantes.map((estudiantes) => estudiantes.nombre)
console.log(nombres)

estudiantes.sort((estudiante1, estudiante2) => estudiante2.edad - estudiante1.edad)
for (const estudiante of estudiantes) {

    console.log(estudiante);
}
