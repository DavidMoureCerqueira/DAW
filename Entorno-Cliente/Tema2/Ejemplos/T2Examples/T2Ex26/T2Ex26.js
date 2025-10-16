//funciones anónimas
//se asocian a una variable


let minhaFuncion = function (a, b) { return a + ", " + b + "!"; } // Función anónima
console.log(minhaFuncion("Como vai", "amig@")); // Como vai, amig@!

let saludar = function () {
    console.log("hello");
}
//Funcion flecha
let saludarFlecha = () => console.log('Hola amigo mio del youtube');

saludar();
saludarFlecha();

let numeros = [1, 2, 3, 4, 5];
console.log('Funcion anonima')
numeros.forEach(function (numero) {
    console.log(numero)
})

console.log('Funcion Flecha')
numeros.forEach(numero => {
    console.log(numero)
});

console.log('Funcion anonima con map')
let numerosDoble = numeros.map(function (numero) {
    return numero * 2;
})

console.log('Funcion de flecha con map')
let numerosDobleFlecha = numeros.map((numero) => numero * 2)
console.log(numerosDobleFlecha)


//Llamar a otra función por parametro y utilizandola en return
console.log("Funcion anonima pasada como parametro")
function aplicarFuncion(valor, funcion) {
    console.log("Dentro de aplicarFuncion")
    return funcion(valor)
}

let resultado = aplicarFuncion(9, function (x) {
    return x * x;
})

console.log(resultado)

console.log("Funcion de flecha pasada como parametro")
let resultadoFlecha = aplicarFuncion(9, (x) => x * x)
console.log(resultado)