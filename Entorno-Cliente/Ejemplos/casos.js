// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[...arr1,...arr2,...['paco']]

// console.log(arr3)


// let persona1 = {
//     nombre: 'David',
//     apellido: 'Moure',
//     edad: 29
// }
// let persona2 = {
//     edad: 55,
//     profesion: 'pintor'
// }

// let personaDefinitiva = { ...persona1, ...persona2, ...{ profesion: 'decorador' } }

// console.log(personaDefinitiva)

// let [a, b, ...resto] = [1, 2, 3, 4, 5, 6]
// console.log(a)
// console.log(b)
// console.log(resto)
// objeto={ a: 1, b: 2, z: 3, e: 4, f: 5, g: 6 }
// let { a, b, ...resto } = objeto
// console.log(a)
// console.log(b)
// console.log(resto)
// console.log(objeto)

// let resultado = 3 + 4 * 2 / (1 - 5) ** 2 ** 3;
// //3+4*2/(-4)**2**3
// //3+4*2/(-4)**8
// //3+8/65536
// //3+8/65536
// //3+0.001220703125
// console.log(resultado)
// let num = new Number('3.14')
// let num2 = num + 5
// console.log(num2); // 3.14
// console.log(Number(Infinity)); // 4.7
// mapa = new Map([['uno', 'one'], ['dos', 'two'], ['tres', 'three']])
// //for (const key of mapa.keys()) console.log(key);   // nombre, edad
// for (const value of mapa.values()) console.log(value); // Ana, 25

// let phone = '617623888'
// console.log(typeof (phone))
// console.log(phone.length)
// let array = [1, 2, 3, 4, 5, 6]
// console.log(typeof (array))
// console.log(array.length)

// cadena = 'hola'

// console.log(cadena.length)

// //.concat() Crea una nueva cadena, para hacerlo sobre la misma cadena habria que reasignarla como con '+'
// cadena = cadena.concat(' ' + 'Mundo')

// console.log(cadena)

// //.trim() Crea una nueva cadena sin espacios al principio o al final
// cadena = '  hola Mundo   '
// cadena = cadena.trim()
// console.log(`La cadena sin espacios es:${cadena}:`)

// /*.toUpperCase(), toLowerCase(), toLocaleUpperCase(), toLocaleLowerCase()
// Devuelve una cadena modificada segun la función, si se cambiar el valor, habría que reasignarlo*/

// cadena = 'hola mundo'

// console.log('.toUpperCase()' + cadena.toUpperCase())                //HOLA MUNDO
// console.log('.toLowerCase()' + cadena.toLowerCase())                //hola mundo
// console.log('.toLocaleUpperCase()' + cadena.toLocaleUpperCase())    //HOLA MUNDO
// console.log('.toLocaleLowerCase()' + cadena.toLocaleLowerCase())    //hola mundo

// /*.charAt(), charCodeAt() Devuelve el caracter o el valor Unicode*/

// console.log(cadena.charAt(0))           //h
// console.log(cadena.charCodeAt(0))       //104

// /*.fromCharCode() cambia el valor del Unicode a string */
// console.log(String.fromCharCode(104))   //h

// /*
// .includes() devuelve true si incluye ese array
// .indexOf() devuelve la primera posición en la que se encuentra, devuelve -1 si no se encuentra
// .lastIndexOf() devuelve la última posición en la que se encuentra, devuelve -1 si no se encuentra
// */
// console.log('.includes() ' + cadena.includes('hola'))       //true
// console.log('.indexOf() ' + cadena.indexOf('o'))            //1
// console.log('.lastIndexOf() ' + cadena.lastIndexOf('o'))    //9

// /*
// .substr(posIni,longitud) 
// .substring(posIni,posFin(excluido)) --> Si posFin>posIni los intercambia, pero los INDICES NEGATIVOS LOS TRATA como 0
// .slice(posIni,posFin(excluido)) --> Si posFin>posIni NO los intercambia, los indices negativos los recorre al reves
// */
// console.log('.substr() ' + cadena.substr(3, 8))             //a mundo
// console.log('.substring() ' + cadena.substring(8, 3))       //a mun (le dió la vuelta)
// console.log('.slice() ' + cadena.slice(3, 8))               //a mun
// console.log('.slice() ' + cadena.slice(-8))                 //ndo
// console.log(cadena)

// /*
// .localeCompare() --> Compara dos strings  teniendo en cuenta el lenguaje del navegador:
//     **En orden alfabético**
//     -1 --> si la primera es menor
//      0 --> si son iguales
//      1 --> si la segunda es mayor
// */

// /*
// .split('valor') separa el string en un array dividiendo por el valor que le hemos puesto, y lo omite
// */
// console.log(cadena.split('o'))                          //['h', 'la mund', '']

// /*
// .search() --> Devuelve el index de la primera coincidencia, -1 si no encuentra
// .match() --> Devuelve las coincidencias y con /loquesea/g devuelve un arraya de coincidencias
// .replace('valorViejo','valorNuevo') --> Devuelve una cadena con el cambio
// */

// console.log('.search() ' + cadena.search('o'))                  //1
// console.log('.match() ' + cadena.match(/a/))                    //a
// console.log('.replace() ' + cadena.replace('la', 'papamelo'))   //hopapamelo mundo

// /*

// Se utilizan con el constructor de String o con objetos
// .toString() convierte texto a string
// .valueOf()  Devuelve el valor primitivo
// */

// fecha = new Date()
// console.log(fecha)                  //Wed Oct 22 2025 16:12:58 GMT+0200 (hora de verano de Europa central)
// /*
// ● .toDateString(): devuelve una cadea de texto con la fecha (sin hora).
// */
// console.log(fecha.toDateString())   //Wed Oct 22 2025

// /*
// ● .toLocaleDateString(): devuelve una cadena de texto con la fecha sin hora teniendo en cuenta la config local
// */
// const options = {
//     weekday: "long",
//     year: "long",
//     month: "long",
//     day: "long"
// }
// console.log(fecha.toLocaleDateString('es-ES', options))
// /*
// ● .toTimeString(): Devuelve una cadena de texto con la hora
// */
// console.log(fecha.toTimeString()) //16:15:46 GMT+0200 (hora de verano de Europa central)
// /*
// ● .toLocaleTimeString(): Devuelve una cadena de texto con la hora teniendo en cuenta la config local
// */

// /*
// ● toString(): Devuelve un string con la fecha completa
// */
// console.log(fecha.toString())   //Wed Oct 22 2025 16:16:50 GMT+0200 (hora de verano de Europa central)
// /*
// ● toLocaleString(): Devuelve un string con la fecha completa teniendo en cuenta la config local
// */
// /*
// toUTCString(): devuelve una cadena de texto con la fecha completa en formato UTC.
// */
// console.log(fecha.toUTCString())    //Wed, 22 Oct 2025 14:18:01 GMT
// /*
// ● toISOString():
// */
// console.log(fecha.toISOString()) //2025-10-22T14:18:49.415Z
// console.log(typeof (fecha.toISOString()))    //string
// /*
// ● toJSON():
// */
// console.log(fecha.toJSON())
// console.log(typeof (fecha.toJSON()))        //string

// /*
// .valueOF(): --> valor en milisegundos de la fecha
// */
// console.log(fecha.valueOf())
// /*
// Date.now(): --> valor en milisegundos del momento actual
// */
// console.log(Date.now())

// /*
// Date.parse(): --> Representa el valor en milisegundos de una fecha pasada como parametro
// */

// let numero = new Number(3.14)

// console.log(typeof (numero))        //object

// numero=5
// console.log(typeof (numero))        //number

// let numero = 'plol'
// console.log(numero)
// console.log(typeof (numero))
// console.log(isNaN('hola'))

//  let numero=NaN
//  console.log(numero)
//  console.log(typeof(numero))

// let random = Math.trunc(Math.random() * 11)
// console.log(random)


// let d = new Date();
// let msg = "Hoxe é " + d.toLocaleDateString() + ". Son as " +
//     d.toLocaleTimeString() + " horas.";

// console.log('toString()', d.toString())
// console.log('toLocaleString()', d.toLocaleString())
// console.log('toUTCString()', d.toUTCString())
// console.log('toISOString()', d.toISOString())
// console.log('toJSON()', d.toJSON())
// console.log(d.toJSON().split('T')[0])

// options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
// }
// console.log(d.toLocaleString('es-ES', options))
// console.log(Number("5") + true);
// console.log(Boolean("false"));
// console.log(Boolean(0));
// console.log(Number("10px"));
// console.log(String(123) + 1);
// console.log(+"5" + 1);

// console.log(typeof +"5");


// console.log(null || "JS" && "HTML");
// console.log(!!"0");

// if (x = 5) console.log("A");
// else console.log("B");
// let num = "10";
// switch (num) {
//     case 10: console.log("A");
//     case "10": console.log("B");
// }
// // let obj = { a: 1, b: 2, c: 3 };
// // for (let key in obj) {
// //     console.log(key);
// // }
// let obj = { a: 1, b: 2 };
// for (let val of Object.values(obj)) {
//     console.log(val);
// }


// let texto = "JS";
// for (let letra of texto) {
//     console.log(letra);
// }

// let fecha = new Date("2025-11-03");
// console.log(fecha.getDate());
// let txt = "JavaScript";
// console.log(txt.slice(4, 10));
// console.log(isNaN("hola"));
// console.log(Number.isNaN("hola"));
// console.log((10).toString(3));
// let arr = [10, 20, 30]
// delete arr[1]
// console.log(arr.length)
// console.log([1, 2, 3].slice(1, 2))
// console.log([].every(x => x > 0))

// function llamar(a, b, c,) {
//     return c
// }
// console.log(isNaN("123"))

// console.log(isFinite(1 / 0))


// function contadorFunction() {
//     this.valor = 0;
//     setInterval(function () {
//         this.valor++;
//         console.log("Valor (function): " + this.valor);
//     }, 1000);
// }
//this funciona en funcion de flecha y en function no
// function contadorArrow() {
//     this.valor = 0;
//     let intervalId=setInterval(() => {
//         this.valor++;
//         console.log("Valor (arrow): " + this.valor);
//         if (this.valor === 3) {
//             clearInterval(intervalId)
//         }
//     }, 1000)
// }
// contadorArrow()

// function multiplicar(...numeros) { // --> Se recibe un array
//     return numeros.reduce((resultadoFinal, numero) => (resultadoFinal * numero));
// }

// console.log(multiplicar(1, 2, 3, 4, 5, 6));
// console.log(multiplicar([1, 2, 3, 4, 5, 6]));        //Si tiene el valor inicializado da NaN
// console.log(multiplicar(...[1, 2, 3, 4, 5, 6])); 
// function test() {
//     var x = 10;
// }
// console.log(x); // ✅ 10  (sale del bloque)

// console.log([].toString())

// function crearContador() {
//     let contador = 0;
//     return function () {
//         contador++;
//         console.log(contador);
//     };
// }

// const contar = crearContador();
// contar();
// contar();
// contar();

function crearContador() {
    let contador = 0;
    console.log('dentro', contador)
    return function () {
        contador++;
        console.log(contador);
    };
}
const contar = crearContador();
contar();
contar();
const gola = crearContador()
gola()
contar();