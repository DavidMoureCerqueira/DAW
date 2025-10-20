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
numeros.forEach(function (numero) { //Se aplica sobre los propios elementos del array
    console.log(numero)
})

console.log('Funcion Flecha')
numeros.forEach(numero => {
    console.log(numero)
});

console.log('Funcion anonima con map')
let numerosDoble = numeros.map(function (numero) { //Genera un nuevo array con los cambios creados
    return numero * 2;
})

console.log('Funcion de flecha con map')
let numerosDobleFlecha = numeros.map((numero) => numero * 2)
console.log(numerosDobleFlecha)


// Pasar una función anonima por parametro y utilizandola en return
console.log("Funcion anonima pasada como parametro")
function aplicarFuncion(valor, funcion) {
    console.log("Dentro de aplicarFuncion")
    return funcion(valor)
}

let resultado = aplicarFuncion(9, function (x) {
    return x * x;
})

console.log(resultado);

console.log("Funcion de flecha pasada como parametro")
let resultadoFlecha = aplicarFuncion(9, (x) => x * x);
console.log(resultado);

//Uso con eventos (simulado)
//setTimeOut() realiza un codigo pasado x milisegundos

// setTimeout(code, delay)Revisar documentacion oficial mdn__ mozilla.org

setTimeout(function () {
    console.log("Mensaje mostrada tras 3 segundos")}, 3000
);

// setInterval(ConvolverNode,delay) Se reinicia cada delay que le pongamos. Termina cuando ejecutemos clearInterval() dentro de su código y para clearInterval hay que enviar un parámetro.
// clearInterval() se puede llamar fuera del codigo pero necesita un ID
// El id se genera al crear el setInterval()
//Hacer un setInterval con una cuenta atras, se define una variable cuenta:

let cuenta = 10;

let interID = setInterval(function () {
    console.log("Cuenta atras: ", cuenta--);

    if (cuenta == 0) {
        clearInterval(interID)
        console.log("Fin") ///Pasarle el evento id para que pare
    }
}, 1000);