let URI = "https://fernandowirtz.com/publicar.php?tag=Organización"

let uriCodificado = decodeURI(URI)
console.log('decodeURI') //No codifica las tidles barras . etc
console.log(uriCodificado)

let uriComponente = encodeURIComponent(uriCodificado)
console.log('decodeURIComponente') //Codifica las tildes,/,. etc
console.log(uriComponente)

console.log(decodeURI(uriCodificado))
console.log(decodeURIComponent(uriComponente))

//eval
console.log(eval("(3+7)/3"))
console.log(eval("((3+7)/3).toFixed(3)")) //redondea decimales

//console.log('isFinite
console.log(isFinite(1)); // true
console.log(isFinite(1/0)); // false
console.log(isFinite(+Infinity)); // false
console.log(isFinite(-3.14)); // true
console.log(isFinite(new Date())); // true
console.log(isFinite("2019-11-22")); // false

// isNaN(): determina se un valor non é un número legal devolvendo true/false.
console.log(isNaN(1)); // false
console.log(isNaN(1/0)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(-3.14)); // false
console.log(isNaN(new Date())); // false
console.log(isNaN("2019-11-22")); // true

//Number(): converte o valor dun obxecto a un número. Devolve NaN se non é válido.
Number(true); // 1
Number(new Date()); // 1576224556541
Number("3.14"); // 3.14
Number("3 14"); // NaN

// parseFloat(): ANALIZA LA PRIMERA PARTE DEL STRING

parseFloat("3") // 3
parseFloat("3.0") // 3
parseFloat("3.14") // 3.14
parseFloat("3 4 5") // 3 --------------------------->PREGUNTA TIPO EXAMEN
parseFloat(" 3 ") // 3
parseFloat("70 kg") // 70 --------------------------> PREGUNTA TIPO EXAMEN
parseFloat("I am 70") // NaN

//parseInt():

parseInt("3") // 3
parseInt("1001", 2) // 9
parseInt("3.14") // 3
parseInt("3 4 5") // 3
parseInt(" 3 ") // 3
parseInt("70 kg") // 70
parseInt("I am 70") // NaN

//● String(): converte o valor dun obxecto nunha string. Equivale a empregar o método toString() nos obxectos en cuestión.
String(3+4); // 7 --> Es string
String(Boolean(1)); // "true"
String(new Date()); // Fri Dec 13 2019 09:28:51 GMT+0100




//Funciones definidas por el usuario
//function nombre (opcional) () {}



