

//Conversion de tipos

//Uso de typeof para identificar el tipo de dato

console.log("Uso de typeof para identificar el tipo de dato")

console.log(typeof "Diego") // string
console.log(typeof 3.14) // number
console.log(typeof NaN) // number <--ATENCION
console.log(typeof true) // boolean
console.log(typeof [1, 2, 3, 4]) // object (un array é un tipo obxecto)<--ATENCION
console.log(typeof { nome: 'Diego', idade: 28 }) // object
console.log(typeof new Date()) // object (unha data é un tipo obxecto)
console.log(typeof function () { }) // function --> Daria lo mismo si simplemente se pasase el ()
console.log(typeof myCar) // undefined
console.log(typeof null) // object (o valor Null é un tipo obxecto)<--ATENCION
console.log(typeof undefinedVar) // undefined

// Conversion automatica de tipos

//Operador string

console.log("Conversion a texto:")

console.log(3 + "4") // 34
console.log(3 + 4 + "5") // 75 (o primeiro + fai unha suma aritmética)
console.log("" + 3) // "3"
console.log("3" + true) // "3true"

//Operador aritmetico
console.log("3" * 2 )// 6
//3 – true // 2 (true equivale a 1)
console.log(3 + true) // 4
console.log(+"4") // 4 (co operador unario + tamén se converten as cadeas de carácteres en números) <<-ATENCION hace cast al esta el signo positivo, si no haria cast a negativo CASTEA

//Operaciones relacionales

console.log("3" > 4)// false CASTEA
console.log(3 > true) // true = 1

//Conversión a texto (string)

console.log((3 + 4).toString()); // "7"
//console.log(new Date().toString()); // Mon Oct 14 2019 12:13:27 GMT+0200 Fecha del momento de lanzarlo
console.log(true); // true

//Conversion a numeros
console.log("Conversion a numeros");

console.log("number('3.14') ->", Number('3.14')); 3.14
Number(' ') //0
Number('') //0
Number('3.14 16')// NaN
//Number(newDate())// timestamp (tiempo transcurrido desde el 1 del nose que del 70 como en windows)
Number(true)//1
Number(false)//0
Number(null)//0
Number(undefined)// NaN

//Conversion a Int

parseInt('3.14');         // 3
parseInt('-F', 16);     // -15  --> El 16 indica la base
parseInt('4.7', 10);      // 4    --> El 10 indica la base

// Conversion a float
parseFloat('3.14'); // 3.14
parseFloat('4.7', 10); // 4.7 Si en lugar de la base pones letras lo ignora y transforma el numero
parseFloat('4.7',  'cualquier texto'); // 4.7 

//Conversion Boolean

Boolean(3.14); // true
Boolean(""); // false
Boolean(0) //false
Boolean(null) //false
Boolean(undefined) //false
Boolean([]) //true
Boolean({}) //true
Boolean(NaN) //false
Boolean('false') //true

