var fraseOriginal = "El objeto String es fundamental en JavaScript";

//Longitud
console.log("---1.Propiedad .lenght---")
console.log("La longitud de la frase es:" + fraseOriginal.length)

//Mostrar la primera letra charAt
console.log("Utilizando .charAt()")
console.log("La primera letra es: " + fraseOriginal.charAt(0));

//Mostrar letra sin charAt
console.log("Usando [] como si fuera un array")
console.log("La quinta letra es: " + fraseOriginal[5])

//Mostrar posicion de JavaScript 
console.log("Usando .indexOf('')")
console.log("La posicion de JavaScript es: " + fraseOriginal.indexOf("JavaScript"))

console.log("Comprobar existencia usando .includes('')")
console.log("Esta fundamental? --> " + fraseOriginal.includes('fundamental'))

console.log("Recortar del 2 al 10 usando .slice()")
console.log(fraseOriginal.slice(2, 10))

console.log("substr() donde empieza, cuantos caracteres coges. Permite empezar en una posicion negativa")
console.log(fraseOriginal.substr(2, 10))
console.log("substring() permite negativos")
console.log(fraseOriginal.substring(2, 10))
console.log("trim() recorta los espacios a ambos lados")
console.log("Uso de replace()")
var replace = fraseOriginal.replace("objeto", "tipo de dato")
console.log(replace);

console.log("Contar el numero de palabras")
palabras = fraseOriginal.split(" ");
console.log(`La frase original tiene :   ${palabras.length}`)