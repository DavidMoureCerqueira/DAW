// const persona ={
//     nombre:'David',
//     edad:29,
//     ciudad: 'A Coruña'
// }

// for (const property in persona) {
//     console.log(`Propiedad ${property} valor:${persona[property]}`)
    
// }


const personas=[
    {
    nombre:'Paco',
    edad:104,
    ciudad: 'Dusseldorf'
    },
    {
    nombre:'Alfredo',
    edad:90,
    ciudad: 'Ferrol'
    }
]

for (let i in personas) {
    console.log(`${personas[i].nombre} vive en ${personas[i].ciudad} y tiene  ${personas[i].edad} años`)
    
    
}