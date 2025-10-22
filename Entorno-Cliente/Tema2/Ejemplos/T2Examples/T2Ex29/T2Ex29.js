
//Formas de hacer sobre carga de metodos
//Valores por defecto
function saludar(nombre, mensaje = 'Bienvenido/a!') {
    console.log(mensaje, nombre)
}

saludar('David');

saludar('Federico', 'Hola');

//arguments es un OBJETO que recibe los argumentos de la función y se trata como un ARRAY
function mostrarArgumentos() {
    for (let index in arguments) { // --> ARRAY
        console.log(arguments[index])
        
    }
}
mostrarArgumentos(1, 2, 3, 4, 5, 'HOLA')

//Usando rest
function multiplicar(...numeros) { // --> Se recibe un array
    return numeros.reduce((resultadoFinal, numero) => (resultadoFinal * numero));
}

console.log(multiplicar(1, 2, 3, 4, 5, 6));
console.log(multiplicar([1, 2, 3, 4, 5, 6]));        //Si tiene el valor inicializado da NaN
console.log(multiplicar(...[1, 2, 3, 4, 5, 6]));     //Asi que multiplica, porque junta los arrays (preguntar CHATGPT)

let a = 1;
let b = 2;

function datosPersona(id, nombre, ...detalles) { // DETALLES ES UN ARRAY
    console.log(id, nombre, detalles) //Si usase arguments id y nombre serian arguments[0], arguments[2]
}
datosPersona(1, 'Paco', 24, true, 'Almendras')

//Paso por valor y por referencia
//paso valor
function hazAlgo(x, y) {
    x++;
    y++;
    console.log(x, y)
}

hazAlgo(a, b);
console.log(a, b);


let arr = [1, 2, 3];

function incrementarArray(arr) {
    //map no sirve para hacerlo porque devuelve un nuevo array
    for (let i in arr) {
        arr[i]++;
    }
    console.log(arr)
}
incrementarArray(arr)
console.log(arr)

