//Funcion de flecha!
let saludar1 = (nombre1, nombre2) => { return `Hola ${nombre1} y ${nombre2}` }
console.log(saludar1('Federico', 'Arturo'))
let saludar2 = (nombre1, nombre2) => `Hola ${nombre1} y ${nombre2}`
console.log(saludar2('Paco', 'Arturo'))

let cuadrar = (numero) => numero * numero;
console.log(cuadrar(5))

let numeros = [1, 2, 3, 4, 5]

let numeroTriple = (numeros) => numeros.map((numero) => numero * 3)
console.log(numeroTriple(numeros))

let triple = numeros.map((numero) => numero * 3)
console.log(triple)

let paresFilter = numeros.filter((num) => num % 2 == 0) //Guarda numeros pares
console.log(paresFilter)

let numReduce = numeros.reduce((total, num) => (total + num), 0)
console.log(numReduce)

//find primer elemento del array par
let primerParFind = numeros.find((num) => num % 2 == 0) //Guarda numeros pares
console.log(primerParFind)


//Funcion flecha y objetos

const crearPersona = (nombre, edad) => ({ nombre, edad }) //Si trabajando con objetos no pones los () interpreta que las {} del objeto son un fragmento de codigo

console.log("Nueva persona: ", crearPersona("Carlos", 30));

//Diferencia de las function de las funciones anonimas y de las funciones de flecha
//this no funciona en function
function contadorFunction() {
    this.valor = 0;
    setInterval(function () {
        this.valor++;
        console.log("Valor (function): " + this.valor);
    }, 1000);
}
//this funciona en funcion de flecha y en function no
function contadorArrow() {
    this.valor = 0;
    setInterval(() => {
        this.valor++;
        console.log("Valor (arrow): " + this.valor);
    },1000)
}
contadorArrow()


//Funcion de flecha como callback

// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("Documento Cargado")
// })

//USO EN PROMESAS Y ASINCRONÍA

fetch('URL'
    .then(()=>console.log("datos recibidos"))           //si puedes haces esto
    .catch(()=>console.log("Se produjo un error"))      //si no puedes, haz esto
)