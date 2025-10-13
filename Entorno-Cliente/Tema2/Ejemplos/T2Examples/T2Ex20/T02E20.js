// CREACIÓN DE ARRAYS

// Usando new Array()
let estacions1 = new Array("Primavera", "Verán", "Outono", "Inverno");

// De forma literal
let estacions2 = ["Primavera", "Verán", "Outono", "Inverno"];

console.log("Array 1: " + estacions1);
console.log("Array 2: " + estacions2);

// ACCESO AOS ELEMENTOS

console.log("Acceso a elementos:");
console.log("Primeira estación: " + estacions2[0]);
console.log("Última estación: " + estacions2[estacions2.length - 1]);

// ELIMINACIÓN DE ELEMENTOS

console.log("Eliminación de elementos:");

// Asignar null non elimina realmente o elemento
estacions2[1] = null;
console.log("Despois de asignar null: " + estacions2);

// delete elimina o valor, pero non reduce a lonxitude
delete estacions2[1];
console.log("Despois de delete: " + estacions2);
console.log("Lonxitude: " + estacions2.length); // Segue sendo 4

// splice si permite eliminar e reorganizar o array
estacions2.splice(1, 1); // Elimina 1 elemento na posición 1
console.log("Despois de splice: " + estacions2);
console.log("Lonxitude actualizada: " + estacions2.length); // Agora é 3

// PERCORRER ARRAYS

console.log("Percorrido do array:");

// Con bucle for
for (let i = 0; i < estacions1.length; i++) {
  console.log("Estación (for): " + estacions1[i]);
}

// Con for...of
for (let estacion of estacions1) {
  console.log("Estación (for...of): " + estacion);
}

// ARRAYS PARALELOS

let estacions = ["Primavera", "Verán", "Outono", "Inverno"];
let temperaturaMax = [15, 25, 20, 10];
let precipitacion = [25, 10, 30, 20];

console.log("Datos das estacións (arrays paralelos):");
for (let i = 0; i < estacions.length; i++) {
  console.log(`${estacions[i]}: ${temperaturaMax[i]}ºC, ${precipitacion[i]}mm`);
}

// ARRAYS MULTIDIMENSIONAIS (SIMULADOS)

let clima = [
  ["Primavera", "Verán", "Outono", "Inverno"],
  [15, 25, 20, 10],
  [25, 10, 30, 20]
];

console.log("Acceso a datos nun array multidimensional simulado:");
console.log("Estación: " + clima[0][2]);
console.log("Temperatura máxima: " + clima[1][2]);
console.log("Precipitación: " + clima[2][2]);

let edades = [40, 17, 40, 85, 24];
let resultado = edades.pop(); //24
console.log(edades); // 40,17,40,85

let edades2 = [40, 17, 40];
resultado = edades.push(85, 24)//5
console.log(resultado); //40,17,40,85,24
//Se podria hacer
resultado = [...edades, 100, 3];
console.log(resultado)
resultado = [...edades, ...[100, 2]];
console.log(resultado)

let idades = [40, 17, 40, 85, 24];
resultado = idades.shift(); // 40
console.log(idades); // [17, 40, 85, 24]

idades = [40, 17, 40];
resultado = idades.unshift(85, 24); // 5
console.log(idades); // [85, 24, 40, 17, 40]

idades = [40, 17, 40, 85, 24];
resultado = idades.slice(1,3); // [17, 40]
resultado = idades.slice(-2); // [85, 24]
// Extrae pero no modifica edades

idades = [40, 17, 24];
resultado = idades.splice(2, 1, 40, 85); // [24]
console.log(idades); // [40, 17, 40, 85]


let android = ["samsung", "huawei", "xiaomi"];
let outros = ["iphone"];
let smartphones = android.concat(outros);
// Concat es como un spread de arrays