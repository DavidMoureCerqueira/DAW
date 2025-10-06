const personas = [
    {
        nombre: 'Paco',
        edad: 104,
        ciudad: 'Dusseldorf'
    },
    {
        nombre: 'Alfredo',
        edad: 90,
        ciudad: 'Ferrol'
    }
]

for (let persona of personas) {
    console.log(persona)
}

for (let persona of personas) {
    console.log(`${persona.nombre} vive en ${persona.ciudad} y tiene ${persona.edad} años.`)
}

// let texto='Me encanta estar en clase hasta las 22.30'

// for (let letra of texto) {
//     console.log(letra)
// }

//Set de colores:

let colores = new Set(['Azul', 'Amarillo', 'Rojo']);

for (const color of colores) {
    console.log(color)
}

let edades= new Map([
    ['Ana',21],
    ['Yago', 23],
    ['David', 29]
]);

for (let [nombre,edad] of edades) {

    console.log(`${nombre} tiene ${edad} años`)
    
}