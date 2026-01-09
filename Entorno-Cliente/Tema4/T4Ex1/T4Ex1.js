console.log(x);
var x = 10
// No falla porque var es hoisted, ya existe pero no esta definida

console.log(x)

// console.log(y)
// ReferenceError, let no es hoisted
let y = 5

console.log(y)

// console.log(z)
// ReferenceError, const no es hoisted

const z = 3

console.log(z)


// Las funciones si estan hoisted

llamar()

function llamar() {
    console.log(("Hacer llamada"))
}

// ejecutarFuncion()
// No se puede llamar antes, TypeError -> No se puede usar var, let ni const
var ejecutarFuncion = () => {
    console.log('Ejecutada')
}

ejecutarFuncion()