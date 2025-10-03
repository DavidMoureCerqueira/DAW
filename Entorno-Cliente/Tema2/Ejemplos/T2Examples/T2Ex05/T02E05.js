// Comparaciones

// Ejemplo comparaciones

// let resultado = 3 + 4 * 2 / (1 - 5) ** 2 ** 3;
// // Resolución paso a paso:
// // 1. 5 ** 2 = 25
// // 2. 25 ** 3 = 15625
// // 3. 1 - 15625 = -15624
// // 4. 4 * 2 = 8
// // 5. 8 / -15624 = -0.000512
// // 6. 3 + (-0.000512) = 2.999488
// console.log('Resultado: ${resultado}');


// Ejemplo 5: Comparación y lógica

let resultado5 = 5 > 3 && 2 + 4 == "6";
console.log("Ejemplo 5: " + resultado5)     //true

// Ejemplo6: Asignacion con operador
let x = 10;
x += 5 * 2; //--> x = x + 5 * 2
console.log("Ejemplo6: " + x);              //20

//Ejemplo7: Acceso a miembros y operadores de array

let arr = [1, 2, 3];
let index = 1;
let valor = arr[++index];
console.log(valor)                         //3 ya que el array empieza a contar en 0, asi que al utilizar index ++1=2 es la posicion del numero 3
valor = arr[index++];                      //2 Porque no suma despues de que toma el valor, el index incrementaria a 2, pero no aplicaria aqui


