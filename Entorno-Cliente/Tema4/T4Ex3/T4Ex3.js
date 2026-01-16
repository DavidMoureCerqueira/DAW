"use strict"
try {

    x = 10 //ReferenceError
} catch (error) {
    console.warn(error)
}

try {
    let persona = {
        nombre: 'David',
        edad: 29
    }
    // Freeze no deja añadir, modificar o retirar propiedades, si no esta en modo estricto, no da error solo no lo hace, si esta en modo estricto si que da error
    // Congela a nivel superficial, congela el objeto pero no los que hay dentro

    let persona2 = Object.freeze(persona) //Coge un objeto y devuelve otro  congelado
    persona.apellido = "Moure"
    persona2.apellido = "Moure"
    console.log(persona)

    // persona2.apellido="Moure"
} catch (error) {
    console.warn(error)
}


// En lugar del objeto window devuelve undefined
function contexto() {
    console.log(this)
}
contexto()

try {
    // Da error de sintaxis si se utilizan dos parametros con el mismo nombre

    function saludar(nombre, nombre) {
        console.log("Hola", nombre)
    }
    saludar("David", "Paco")
} catch (error) {
    console.warn(error)
}


// EJEMPLO FREEZE QUE VA A ENTRAR EN EL EXAMEN -> VERLO EN T4EX3_2

// try {
//     const user = {
//         nome: "Brais",
//         idade: 24,
//         enderezo: { rua: "Rua Caballeros", numero: 123, piso: 2, cidade: "A Coruña" },
//         nacionalidad: "Española"
//     };
//     const usuario = Object.freeze(user);
//     usuario.idade = 25;
//     usuario.enderezo.cidade = "Oleiros";
//     usuario.novaPropiedades = "Valor";
//     console.log(usuario, usuario.enderezo)
// } catch (e) {
//     console.error("Erro capturando: " + e.message)
// }