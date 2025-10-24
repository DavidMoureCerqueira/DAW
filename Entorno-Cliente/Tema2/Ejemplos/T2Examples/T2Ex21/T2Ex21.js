console.log("-----pop()-----")
let edades = [40, 17, 40, 85, 24];
let resultado = edades.pop(); //24
console.log(resultado)
console.log(edades); // 40,17,40,85

console.log("-----push()-----")
let edades2 = [40, 17, 40];
resultado = edades2.push(85, 24)//5
console.log(resultado); //40,17,40,85,24
console.log(edades2)
//Se podria hacer

console.log("-----push con spread)-----")
resultado = [...edades2, 100, 3];
console.log(resultado)
resultado = [...resultado, ...[100, 2]];
console.log(resultado)

console.log("-----shift()-----")
let idades = [40, 17, 40, 85, 24];
resultado = idades.shift(); // 40
console.log(resultado)
console.log(idades); // [17, 40, 85, 24]

console.log("-----unshift()-----")
idades = [40, 17, 40];
resultado = idades.unshift(85, 24); // 5
console.log(idades); // [85, 24, 40, 17, 40]
console.log(resultado)

console.log("-----slice()-----")
idades = [40, 17, 40, 85, 24];
console.log('Edades antes de slice', edades)
resultado = idades.slice(1, 3); // [17, 40]
console.log('Edades despues del primer slice', edades)
console.log('Resultado despues de hacer slice entre dos valores', resultado)
resultado = idades.slice(-2); // [85, 24]
console.log('Edades antes del segundo slice', edades)
console.log('Resultado despues de hacer slice utilizando un valor negativo, deberian ser desde el -2 hasta 0, los dos ultimos', resultado)

// Extrae pero no modifica edades
//Modifica el array primer valor posicion en adelante, es donde empieza a eliminar, segundo valor cuantas posiciones y por ultimo por lo que se sustituye
idades = [40, 17, 24];
resultado = idades.splice(2, 1, 40, 85); // [24] 
console.log(resultado)
console.log(idades); // [40, 17, 40, 85]
idades.splice(1)
console.log(idades)


let android = ["samsung", "huawei", "xiaomi"];
let outros = ["iphone"];
let smartphones = android.concat(outros);
// Concat es como un spread de arrays